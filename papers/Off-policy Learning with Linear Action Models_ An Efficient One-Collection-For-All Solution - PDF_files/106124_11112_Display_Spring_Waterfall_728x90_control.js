(function(undefined) {
    // Adjust's Border Color Based on siteID

    var currentItem = 0,
        loaded = false;
    var isSecure = (window.location.protocol === "http:") ? 0 : 1;
    var siteID = ffm.hGetSiteId();
    var rotate = true;
    var dapData;
    var d;
    // var sdk = new ADMSDK();
    // sdk.tracking.enable();
    _borderColor();
    /**
     * Called by ffm when a parent iframe post a message with data for the ad
     * @param  {Object} d Data for this ad. Processed if FFM_CONF was defined earlier
     */
    window['init'] = function(d) {
        d = d;

        // Resizes the intro headline according to charecter count
        _resizeIntroHeadline(d);
        d = addHeadlineBreak(d);

        // generate ad body with a container for items
        var body = ffm.tpl('tpl-body', {
            d: d
        });

        // append the template
        _id('ebay').innerHTML = body;

        // Loads hero image for the banner
        _loadIntroBG(d);

        // add events slider's arrows
        _bindEvents(d);

        callOtam(d);

        assignCtaCopy(d);

        // Animation for the intro headline
        TweenLite.from(_id('intro-headline'), 0.6, {
            y: -100,
            delay: 0.5
        });
    }

    function addHeadlineBreak(d) {
        if (d.h) {
            d.h = d.h.replace('incontournables', 'incontour&shy;nables').replace('innombrables', 'in&shy;nombrables').replace('indémodables', 'indé&shy;modables');
        }
        return d;
    }

    // SCALE INTRO HEADLINE IF WORD IS TOO BIG //
    function _resizeIntroHeadline(d) {

        var titleArray = (d.h).split(' ');
        var longest = (titleArray).sort(function(a, b) {
            return b.length - a.length;
        })[0];
        var titleLength = (longest).length;
        if (titleLength > 14) {
            d.titleFontSize = scaleFont(longest, 20, 6, 4);
        } else {
            if (titleLength >= 13) {
                d.titleFontSize = scaleFont(longest, 20, 6, 3);
            } else {
                if (titleLength <= 12) {
                    d.titleFontSize = scaleFont(longest, 20, 6, 1.5);
                } else {
                    d.titleFontSize = 20;
                }
            }
        }

        function scaleFont(text, defaultFontSize, maxCharacters, reduceScale) {
            if (text.length <= maxCharacters) {
                return defaultFontSize;
            }
            return Math.max(18, defaultFontSize - reduceScale * (text.length - maxCharacters));
        }
    }

    // LOADS FALLBACK INTRO IMAGE IF d.n IS NOT DEFINED //
    function _loadIntroBG(d) {
        if (d.n && d.n != "") {
            var st = (d.n.toString().length < 2) ? '0' + d.n.toString() : d.n;
        } else {
            st = '21'
        }
        // HOSTED IMAGES TEST //
        _id("intro-image").style.backgroundImage = 'url("https://secure.img-cdn.mediaplex.com/0/711/210870/' + introBG1 + st + introBG2 + '")'

        // LOCAL IMAGES TEST //
        //_id("intro-image").style.backgroundImage = 'url("../../images/728x90/' + introBG1 + st + introBG2 + '")'

        //Live from mediaplex
        // var baseConfigURL = (isSecure === 0) ? "http://img-cdn.mediaplex.com/0/711/210870/" : "https://secure.img-cdn.mediaplex.com/0/711/210870/";

        //local testing
        //var baseConfigURL = (isSecure === 0) ? "../images/" : "../images/";
    }

    // CHANGES BORDER COLOUR DEPENDING ON SiTE ID //

    function _borderColor() {
        var borderColor = document.getElementsByClassName('border');
        for (var i = 0; i < borderColor.length; i++) {
            if (siteID === '2' | siteID === '0') {
                borderColor[i].style.backgroundColor = '#000';
            } else {
                borderColor[i].style.backgroundColor = '#ccc';
            }
        }
    }

    function setHTML(d) {
        // wait for all images to load and then remove spinner and append items
        // but wait no longer than 5 seconds
        var loadLimit = d.hasOwnProperty('a') ? Math.min(d.a.length, 3) : 1;
        ffm.load(_getImgs(d, loadLimit), 1000, function(res) {
            loaded = true;
            _id('ebay-b').className = ''; // remove loader class
            _addItems(d); // append all items to the page. They will be hidden
            _redraw(d); // show first item

            // sdk.on(sdk.EVENTS.IN_VIEW, startAnimation(d)); 
            startAnimation(d);
        });
    }

    var count = 0;
    var hasPlayed = false;

    function startAnimation(d) {
        if (hasPlayed === false) {
            hasPlayed = true;
            /*Animate intro out */
            TweenLite.to(_id('logo'), .6, {
                x: -305,
                ease: Sine.easeInOut,
                delay: 2.2,
                onComplete: removeIntroLogo
            });
            TweenLite.to(_id('intro-image'), 1, {
                x: -728,
                ease: Cubic.easeOut,
                delay: 2.8,
                onComplete: removeIntro
            });
            TweenLite.to(_id('intro-headline'), 1, {
                x: -728,
                ease: Cubic.easeOut,
                delay: 2.8
            });

            // Animate and load arrows and ebay logo on second frame //
            TweenLite.to(_id('prev'), .6, {
                alpha: 1,
                ease: Sine.easeInOut,
                delay: 3.5
            });
            TweenLite.to(_id('next'), .6, {
                alpha: 1,
                ease: Sine.easeInOut,
                delay: 3.5
            });
            TweenLite.to(_id('product-logo'), 1, {
                alpha: 1,
                ease: Sine.easeInOut,
                delay: 2.5
            });
            // TweenLite.to(_id('product-info'), .6, { width: 464, ease: Sine.easeInOut, delay: 2.7 });
            TweenLite.to(_id('ctaAnimate'), 1, {
                x: -279,
                alpha: 1,
                ease: Sine.easeInOut,
                delay: 3
            });

            _id("i" + currentItem).style.left = "728px";


            TweenLite.to(_id("i" + currentItem), 1, {
                left: "0px",
                ease: Cubic.easeOut,
                delay: 2.8
            });

            if (d.hasOwnProperty('a')) {
                if (d.a.length > 1) {
                    TweenLite.to(_id("next"), 0, {
                        display: "block",
                        delay: 1
                    });
                    TweenLite.to(_id("prev"), 0, {
                        display: "block",
                        delay: 1
                    });
                    var rotateCount = Math.min(d.a.length, 3)
                    var delay;
                    for (var i = 1; i <= rotateCount; i++) {
                        delay = (2.5 + i * 4) * 1000;
                        setTimeout(autoRotate, delay);
                    }
                }
            }
        } else {

        }

        updateCTAURL();
    }

    function autoRotate() {
        if (rotate === true) {
            count = count + 1;
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "-728px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100);
            if (count == 3) {
                currentItem = 0;
            } else {
                currentItem = (currentItem + 1 > d['a'].length - 1) ? 0 : currentItem + 1;
            }
            TweenLite.from(_id("i" + currentItem), 1, {
                left: '728px'
            });
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "0px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100)
        }
        updateCTAURL();
    }
    /**
     * Called by ffm if unsupported browser
     * @param  {Object} d Data with fallback
     * @param  {String} d.url click through url
     * @param  {String} d.img Image url
     */
    window['fallback'] = function(d) {
        // killAll();

        var url = "http://" + ffm.getBaseUrl()
        var html = '<a href="' + url + '" target="_blank"><img src="' + fallbackImageName + '" /></a>';

        _id('fallback').innerHTML = html;
        _id('ebay').style.display = 'none';
        _id('mainwrapper').style.display = 'none';
    }

    function removeIntro() {
        _id('intro-image').style.display = 'none';
    }

    function removeIntroLogo() {
        _id('logo').style.display = 'none';
    }

    function removeIntroHeadline() {
        _id('intro-headline').style.display = 'none';
    }

    /**
     * @param  {Object}  d Data from iframe with an array of items in the "a" prop
     * @return {Array}   ffm.load compatible array with images to preload
     */

    function _getImgs(d, limit) {
        var imgs = [];
        for (var i = 0; i < limit; i++) {
            var item = d['a'][i];
            imgs.push({
                url: item._i,
                type: 'img'
            });
        }
        return imgs;
    }

    /**
     * Show current item
     */

    function _redraw(d) {
        //_hideAll(d);
        _id('i' + currentItem).style.display = 'block';
    }

    function _redrawIE(d) {
        _hideAll(d);
        _id('i' + currentItem).style.display = 'block';
    }

    /**
     * Hide all items
     */

    function _hideAll(d) {
        for (var i = d['a'].length - 1; i >= 0; i--) {
            _id('i' + i).style.display = 'none';
            _id('i' + i).style["left"] = '0px';
        }
    }

    /**
     * Append item to the page
     */
    var buttonWording = '';

    function _addItems(d) {
        var html = '';

        var ctaArray = (d.acl);
        var ctaArray = ctaArray.length;

        for (var i = d['a'].length - 1; i >= 0; i--) {
            var item = d['a'][i];
            buttonWording = d['acl'];
            if (item.p == "10" || item.p == "&#8364; 10" || item.p == "€ 10") item.p = "";

            if (i <= 0) {
                item.p = "";
            }

            switch (siteID) {
                case '2':
                    item._p = item.p ? 'C $' + replaceString(item._p) : '';
                    break;
                default:
                    item._p = item.p ? ffm.formatCur(replaceString(item._p)) : '';
            }
            item.t = item.t.toLowerCase();
            item.t = item.t.charAt(0).toUpperCase() + item.t.slice(1)


            html += ffm.tpl('tpl-item', {
                siteID: siteID,
                i: i,
                item: item, // item data (price, image, etc.)
                acl: d['acl'] //.toLowerCase() // button text
            });
        };
        _id('js-items').innerHTML = html;
        //  for (var i = d['a'].length - 1; i >= 0; i--) {
        //   autoresizeText(_id('i'+i).getElementsByClassName( 'cta-body' )[0], 120);
        // }
    }

    window.handleServerResponse = function(data) {
        var jsonArray = data;
        var obj;
        for (var k in jsonArray) {
            obj = k.valueOf();
        }
        jsonArray = jsonArray[obj];

        if (jsonArray.propertyIsEnumerable("recos") && getLength(jsonArray.recos) > 5) {
            var len = getLength(jsonArray.recos);
            var i = 0;
            var temp = dapData['a'][0];
            dapData['a'].splice(0);
            dapData['a'][0] = temp;
            while (i < len) {
                dapData['a'].push(setListing(jsonArray.recos[i]));
                i++;
            }

        } else {
            //console.log(" NO REOCS FOUND")

        }
        d = dapData;
        setHTML(d)
    }

    function callOtam(d) {
        var secureUrl = "https://reco.ebay.com/service/plmt/100299?plmt=100299&itm=";
        var unsecureUrl = "http://reco.ebay.com/service/plmt/100299?plmt=100299&itm=";
        var urlTrail = "&fmt=json&callback=handleServerResponse";
        var _externalURL = (isSecure == 0) ? unsecureUrl : secureUrl;
        dapData = d;
        var itemID = d['a'][0].d;
        var usrSi;
        var locale;
        switch (siteID) {
            case "0":
                usrSi = "US"
                locale = "en-US";
                break;
            case "2":
                usrSi = "CA"
                locale = "en-CA";
                break;
            case "3":
                usrSi = "UK"
                locale = "en-GB";
                break;
            case "15":
                usrSi = "AU"
                locale = "en-AU";
                break;
            case "71":
                usrSi = "FR"
                locale = "fr-FR";
                break;
            case "77":
                usrSi = "DE"
                locale = "de-DE";
                break;
            case "101":
                usrSi = "IT"
                locale = "it-IT";
                break;
            case "186":
                usrSi = "ES"
                locale = "es-ES";
                break;
            case "210":
                usrSi = "CA"
                locale = "fr-CA";
                break;
        }
        var url = _externalURL + itemID + "&si=" + siteID + "&usrSi=" + usrSi + "&locale=" + locale + urlTrail
        ffm.load([{
            url: url,
            type: 'js',
            cb: handleServerResponse
        }], 5000, callBack);
    }

    function callBack() {

    }

    function getLength(o) {
        var length = 0;
        for (var s in o) {
            length++;
        }
        return length;
    }

    function setListing(o) {
        var temp = new Object();
        temp._d = ffm.getClickUrl(o.url);
        temp.d = o.id;
        temp.t = o.title;
        temp.p = getString(o.bidPrice);
        switch (siteID) {
            case '2':
                temp._p = o.bidPrice ? 'C $' + replaceString(o.bidPrice) : '';
                break;
            default:
                temp._p = o.bidPrice ? ffm.formatCur(replaceString(o.bidPrice)) : '';
        }
        temp.l = o.timeLeftMs;
        temp.i = "https://ssli.ebayimg.com/images/i/" + o.id + "-0-1/s-l250.jpg";
        temp._i = "https://ssli.ebayimg.com/images/i/" + o.id + "-0-1/s-l250.jpg";

        if (siteID == "77") {
            try {
                if (o.propertyIsEnumerable("EnergyEfficiencyLabel")) {
                    temp.e = o.EnergyEfficiencyLabel + " " + o.EnergyEfficiency;
                }
            } catch (error) {
                //console.log("unable to set eek... " + error.message);
            }
        }
        return temp;
    }

    function getString(st) {
        var len = st.length
        var i = 0;
        var num

        while (i < len) {
            num = st.charAt(i)
            if (Number(num)) break;
            i++;
        }
        return st.slice(i);
    }

    function replaceString(price) {
        price = price.replace(/(&#[0-9]*;)|[^\d.,]/g, '');

        var decimal = Math.max(price.indexOf(','), price.indexOf('.'));

        if (decimal < 0) {
            price = price + '.00';
        } else if (price.slice(decimal).length < 3) {
            price = price + '0';
        }
        return price;
    }

    function killAll() {
        TweenMax.killAll(false, false, true, false); /* kills delayed calls */
        rotate = false;
    }

    /**
     * Create global functions that are called by "onClick". addEventListener used to be here, but this way it's simplier for demo.
     * When an arrow is clicked, we change the "currentItem" variable and tell the view to redraw itself.
     */

    function updateCTAURL() {
        _id('static-cta').href = _id('product-link' + currentItem).href;
    }

    function assignCtaCopy(d) {
        var ctaArray = (d.acl);
        var ctaArray = ctaArray.length

        if (ctaArray >= 24) {
            _id('cta-copy').innerHTML = (d.acl).replace(' ', '<br/>');
        } else {
            _id('cta-copy').innerHTML = (d.acl);

        }
    }

    function _bindEvents(d) {
        window['clickMain'] = function() {
            window.open(ffm.getClickUrl("http://" + ffm.getBaseUrl()));
        }

        window['rightC'] = function() {
            if (!loaded) return;
            killAll();
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "-728px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100)
            currentItem = (currentItem + 1 > d['a'].length - 1) ? 0 : currentItem + 1;
            updateCTAURL();
            TweenLite.from(_id("i" + currentItem), 1, {
                left: '728px'
            });
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "0px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100);
        };

        window['leftC'] = function() {
            if (!loaded) return;
            killAll();
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "728px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100)
            currentItem = (currentItem - 1 < 0) ? d['a'].length - 1 : currentItem - 1;
            updateCTAURL();
            TweenLite.from(_id("i" + currentItem), 1, {
                left: '-728px'
            });
            TweenLite.to(_id("i" + currentItem), 1, {
                left: "0px"
            });
            setTimeout(function() {
                _redraw(d)
            }, 100)
        };

        window['mouseOver'] = function() {
            rotate = false;
        };
    }

    function _id(id) {
        return document.getElementById(id);
    }

    var autoresizeText = function(el, size) {
        // If argument is not a DOMelement, return false
        //if (el.nodeType !== 1) return false;
        var txt = el.innerHTML,
            elx,
            // Get styles of original element
            styles = window.getComputedStyle(el, null),
            fontsize = parseInt(styles['font-size'], 10),
            padding = parseInt(styles['padding-left'], 10) + parseInt(styles['padding-right'], 10),
            indent = parseInt(styles['text-indent'], 10),
            fontfamily = styles['font-family'],
            // New placeholder element
            placeholder = document.createElement('div'),
            newfontsize;
        // Set width of the original element
        if (size == undefined) {
            elx = parseInt(el.offsetWidth, 10) - padding - indent;
        } else {
            elx = size - padding - indent;
        }
        // Set the placeholder to fit the text precisely
        placeholder.setAttribute('style', 'float:left;white-space:nowrap;visibility:hidden;font-size:' + fontsize + 'px;font-family:' + fontfamily);
        placeholder.innerHTML = txt;
        // And add to the current DOM
        document.body.appendChild(placeholder);
        if (placeholder.offsetWidth > elx) {
            // If the text is too big, decrease font-size until it fits
            while (placeholder.offsetWidth > elx) {
                placeholder.style.fontSize = parseInt(placeholder.style.fontSize, 10) - 1 + 'px';
            };
        }
        newfontsize = parseInt(placeholder.style.fontSize, 10);
        // Default the maximum fontsize is the initial fontsize.
        // If you want the text to grow bigger too, change the following line to
        // el.style.fontSize = newfontsize + 'px';
        el.style.fontSize = (newfontsize < fontsize ? newfontsize : fontsize) + 'px';

        // Clean up the placeholder
        placeholder.parentElement.removeChild(placeholder);
    }
})();