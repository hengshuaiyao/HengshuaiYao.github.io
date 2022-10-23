<img align="left" src="videos/head_picture1.jpeg" width="33%" height="33%" alt="hengshuai yao" HSPACE="40" VSPACE="40" class="inline"/>

Hi, my name is Hengshuai Yao. 

My research interest is model-based reinforcement learning and step-size adaptation. Interesting thing is that I brought a connection between the two seemingly unrelated topics. The "learning to accelerate" paper below has the details. 

I worked on multi-step linear Dyna-style planning, model-based approximate policy iteration, and a reinforcement learning perspective for PageRank. 
I explored reinforcement learning for NCSoft game studio in San Francisco. I was the founding PM of a few joint lab projects between University of Alberta and Huawei Technologies Canada. I'm an adjunct professor at Department of Computing Science, University of Alberta. 
I did an internship with Yahoo! Sunnyvale in 2013 and won a championship (CEO award) for "TrendingNow" (yahoo.com at the top right corner) that detects trending topics in Yahoo search engine. 

---

### Publication

- [Learning to Accelerate by the Methods of Step-size Planning](https://arxiv.org/abs/2204.01705). Hengshuai Yao. arXiv:2204.01705. 2022. 

In this paper, I discussed 
<ul>
   <li> a data perspective for gradient descent, and the possibility of using the gradient descent update data to learn and plan step-sizes for an acceleration of gradient descent. </li>
   <li> a new understanding of individual step-sizes for parameters, that the collection of them, in the form of diagonal matrix as we explored in the paper, can be viewed as a multi-step transition model for gradient descent update. </li>
   <li> the diagonal-matrix step-size has the same projection power as a full-sized matrix. Why is this important? The difference is O(n) or O(n^2). The difference is whether O(n) can be exact. This frees the diagonal-step-size from approximating Hessian. </li>
   <li> why negative step-sizes make sense for both deterministic and stochastic settings for fast convergence. </li>
 </ul>

All the above four ideas can be understood from this figure in the paper. 
<div align="center">
<img align="center" src="videos/csawg_illustration.png" alt="hi" class="inline"/>
</div>

Beneficial readings: [GD for high-d problems and step-size halving (1944)](papers/step_size_curry1944.pdf), [Line search (1966)](https://msp.org/pjm/1966/16-1/pjm-v16-n1-p01-p.pdf), [vectorized step-size and meta-gradient by IDBD (1992)](https://www.aaai.org/Papers/AAAI/1992/AAAI92-027.pdf), [Linear Dyna (2008)](https://arxiv.org/pdf/1206.3285.pdf), [Multi-step Dyna (2009)](https://proceedings.neurips.cc/paper/2009/file/c52f1bd66cc19d05628bd8bf27af3ad6-Paper.pdf), [Hyper-gradient descent (2017)](https://arxiv.org/pdf/1703.04782v1.pdf?source=post_page---------------------------), [Stochastic Polyak step-size (2021)](https://arxiv.org/pdf/2002.10542.pdf), [Nesterov accelerated gradient (English translation, 1983)](papers/nesterov83.pdf), [Polyak (1964)](papers/polyak64.pdf), [First-order meta-learning (2018)](https://arxiv.org/pdf/1803.02999.pdf), [Nesterov course (2003)](papers/nesterov03.pdf), [Black-box first-order methods (1983)](papers/blackbox83.pdf)

---

- [The Sufficiency of Off-policyness: PPO is insufficient according to an Off-policy Measure](https://arxiv.org/pdf/2205.10047.pdf). Xing Chen, Dongcui Diao, Hechang Chen, Hengshuai Yao, Jielong Yang, Haiyin Piao, Zhixiao Sun, Bei Jiang, Yi Chang. arXiv:2205.10047. 2022.

This paper has an interesting observation: The famous PPO algorithm fails to discover better policies that is beyond the clip range of the importance sampling ratio. In particular, the figure below shows better policies can deviate as much as 20 to 60 times from the policy in last iteration! The [1-epsilon, 1+epsilon] clipping for the importance sampling ratio by PPO is way too small. If one increases epsilon for PPO, it becomes worse and unstable in performance because of the gradient variances. Our P3O is a solution to tame the importance sampling ratio in an interesting way: in theory it allows the importance sampling ratio to go very large while maintaining low gradient variances and stability of the algorithm. We also have an interesting interpretation of our method being an exploration method for continuous (-state and -action) reinforcement learning, for which counting based methods such as UCB do not apply.  

<div align="center">
<img align="center" src="videos/deon_ppo_p3o.png" alt="hi" class="inline"/>
</div>


There is a recent interesting paper [You May Not Need Ratio Clipping in PPO, 2022](https://arxiv.org/pdf/2202.00079.pdf) by Sun et. al. that also challenges the clipping operation of PPO, which is inherited by many literature improvements of PPO. The "No Need" paper has an observation that the ratio clipping may not be a good option as it can fail to effectively bound the ratios. Their empirical results show that the ratios can easily depart from the range
[0.5, 2.0]. Our paper is more focused on understanding the benefits of allowing the ratios to be very large and why it makes sense to do so. Their paper explores directly optimizing the CPI objective but for stability consideration, they apply early stopping for the optimization process once the ratio goes beyond a threshold. My interpretation of their method is that it is a dynamic clipping method.  

---

- [Understanding and Mitigating the Limitations of Prioritized Replay](https://openreview.net/pdf?id=HBlNGvIicg9). Yangchen Pan, Jincheng Mei, Amir-massoud Farahmand, Martha White, Hengshuai Yao, Mohsen Rohani and Jun Luo. UAI, 2022. 

- [Exploring Neural Architecture Search Space via Deep Deterministic Sampling](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9503404). Keith G. Mills, Mohhamad Salameh, Di Niu, Fred X. Han, Seyed Rezaei, Hengshuai Yao, and Shangling Jui. IEEE Access, pp 110962-110974, volume 9 2021. 

- [Breaking the Deadly Triad with a Target Network](https://arxiv.org/abs/2101.08862). Shangtong Zhang, Hengshuai Yao, and Shimon Whiteson, ICML, 2021.

- [Provably Convergent Two-Timescale Off-Policy Actor-Critic with Function Approximation](https://arxiv.org/abs/1911.04384). Shangtong Zhang, Bo Liu, Hengshuai Yao, and Shimon Whiteson, ICML, 2020.

- [Weakly Guided Few-shot Object Segmentation using Co-Attention with Visual and Semantic Inputs](https://arxiv.org/abs/2001.09540). Mennatullah Siam, Naren Doraiswamy, Boris N. Oreshkin, Hengshuai Yao, and Martin Jagersand, IJCAI, 2020.

- [Mapless Navigation among Dynamics with Social-safety-awareness: a reinforcement learning approach from 2D laser scans](https://arxiv.org/abs/1911.03074). Jun Jin, Nhat M. Nguyen, Nazmus Sakib, Daniel Graves, Hengshuai Yao, Martin Jagersand, ICRA, 2020, Paris, France. 

<div align="center">
<iframe width="678" height="381" src="https://www.youtube.com/embed/SJYDiNjwYSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

- [Hill-climbing on Value Estimates for Search-control in Dyna](https://webdocs.cs.ualberta.ca/~whitem/publications/pan2019hill.pdf). Yangchen Pan, Hengshuai Yao, Amir Masoud Farahmand, and Martha White. IJCAI. Macau, China, 2019.  

---

- [Distributional Reinforcement Learning for Efficient Exploration](https://arxiv.org/abs/1905.06125). Borislav Mavrin, Shangtong Zhang, Hengshuai Yao, Linglong Kong, Kaiwen Wu and Yaoliang Yu. ICML, Long Beach, USA. 2019.

One cool thing about deep RL is the theory of distributional RL. However, why do we need to learn a distribution of the value function at all? While the theory of distributional RL is beautiful, it does not answer this question (yet). For example, in QR-DQN, the paradox is that Q(s,a) is finally taken as a weighted average of the quantile Q values. This weighted average appears to be according to a distribution of the quantiles (In C51, the quantile locations are fixed and the weights/probabilities are learned, while in QR-DQN the locations are learned and the probabilities are fixed). In either case, the Q(s,a) is an estimation of the mean of the return. As a result, ditributional RL (C51 and QR-DQN) still selects actions according to the mean-of-return based value function. This reduces distributional RL to a special method of estimating the value function, back to the standard RL. In my opinion, this loses the point of distributional RL. This paper has an interesting use of the learned value function distribution, in particular, for efficient exploration based on the confidence interval computed from the distribution. Here is the testing performance of this new exploration method (DLTV) in CARLA. This leads to more efficient exploration and even much faster learning than QR-DQN, which motivates "Distributional Reinforcement Learning". 

Relevant papers: [Optimistic Actor-Critic (2019)](https://arxiv.org/pdf/1910.12807.pdf), [Quota (2019)](https://arxiv.org/pdf/1811.02073.pdf), [Non-crossing quantiles (2020)](https://proceedings.neurips.cc/paper/2020/file/b6f8dc086b2d60c5856e4ff517060392-Paper.pdf), [Being Optimistic to Be Conservative (2020)](https://arxiv.org/pdf/1911.01546.pdf), [Truncated Quantile Critics (2020)](http://proceedings.mlr.press/v119/kuznetsov20a/kuznetsov20a.pdf), [TOP-TD3 (2021)](https://proceedings.neurips.cc/paper/2021/hash/6abcc8f24321d1eb8c95855eab78ee95-Abstract.html), [QR-Soft-actor-critic (2021)](https://www.nature.com/articles/s41586-021-04357-7), [Non-decreasing Quantile (2021)](https://arxiv.org/pdf/2105.06696.pdf)

<div align="center">
<img align="center" src="videos/carla_dltv.png" alt="hi" class="inline"/>
</div>

---

- [Deep Reinforcement Learning with Decorrelation](https://arxiv.org/abs/1903.07765). Borislav Mavrin, Hengshuai Yao, and Linglong Kong, 2019. 

<div align="center">
<img align="center" src="videos/dqn_decor.png" alt="hi" class="inline"/>
</div>

- [Reinforcing Classical Planning for Adversary Driving Scenarios](papers/iros_final.pdf). Nazmus Sakib, Hengshuai Yao, Hong Zhang. Preprint, March 2019. Video:

<div align="center">
<iframe align= "middle" width="750" height="400" src="https://www.youtube.com/embed/9BFYX1WRjtA" frameborder="0" allowfullscreen></iframe>
</div>

- [Exploration in the face of Parametric and Intrinsic Uncertainties](papers/dltv_aamas19.pdf). Borislav Mavrin, Shangtong Zhang, Hengshuai Yao, Linglong Kong. AAMAS (poster), Montreal, Canada. 2019.

- [ACE: An Actor Ensemble Algorithm for Continuous Control with Tree Search](https://arxiv.org/abs/1811.02696). Shangtong Zhang, Hao Chen, Hengshuai Yao. AAAI, Honolulu, 2019. (acceptance rate 16.2%)

- [QUOTA: The Quantile Option Architecture for Reinforcement Learning](https://arxiv.org/abs/1811.02073). Shangtong Zhang, Borislav Mavrin, Linglong Kong, Bo Liu, Hengshuai Yao. AAAI (Oral presentation), Honolulu, 2019.

- [Negative Log Likelihood Ratio Loss for Deep Neural Network Classification](https://arxiv.org/pdf/1804.10690.pdf). Future Technologies Conference. Hengshuai Yao, Donglai Zhu, Bei Jiang, Peng Yu, San Francisco, USA. 2019.

- [Towards Comprehensive Maneuver Decisions for Lane Change Using Reinforcement Learning](https://openreview.net/forum?id=SJe9yugRcm). Chen, C., Qian, J., Yao, H., Luo, J., Zhang, H., and Liu., W. NIPS Workshop on Machine Learning for Intelligent Transportation Systems (MLITS). 2018. 

- [Monte-Carlo Tree Search vs. Model-Predictive Controller: A Track-Following Example](https://openreview.net/forum?id=SyiF5-23Z&noteId=S1y46fu1M).  NIPS Workshop on Machine Learning for Intelligent Transportation Systems (MLITS), Yao, H., Nasrati, M., Rezaee, K. Long Beach, USA. 2017. Video:

<div align="center">
<iframe align="center" width="630" height="474" src="https://www.youtube.com/embed/YP7qPJSJAVU" frameborder="0" allowfullscreen></iframe>
</div>

- [Practical Issues of Action-conditioned Next Image Prediction](https://arxiv.org/abs/1802.02975). Zhu, D., Chen,H., Yao, H., Nosrati, M., Yadmellat, P., Zhang, Y. IEEE International Conference on Intelligent Transportation Systems (ITSC), 2018.


- [Pseudo-MDPs and Factored Linear Action Models](papers/pmdp.pdf). Yao, H., Szepesvari, Cs., Pires, B. A., and Zhang, X. IEEE Symposium on Adaptive Dynamic Programming and Reinforcement Learning (IEEE ADPRL), Best student paper nomination, Orlando, Florida, USA, 2014. 

- [Universal Option Models](papers/uom.pdf). Yao, H., Szepesvari, Cs., Sutton, R., and Bhatnagar,S. 2014. NIPS. Montreal, Quebec, Canada. 

- [A System to Predict Future Popularity: Learning to Classify](papers/trending.pdf). Lee, C., Yao, H., He, X., Su, C., and Chang, J-Y. WWW (poster), Seol,Korea, 2014. 
       
- [A Study of Temporal Citation Count Prediction using Reinforcement Learning](papers/citation.pdf). Yao, H., Sutton R. and Rafiei D. 2014.

- [Reinforcement Ranking](papers/rr.pdf). Yao, H. and Schuurmans, D. 2013. 

- [Approximate Policy Iteration with Linear Action Models](papers/lamapi.pdf). Yao, H. and Szepesvari, Cs. Twenty-Sixth Conference on Artificial Intelligence. AAAI. Toronto, Canada. 2012. 

- [MaxRank: Discovering and Leveraging the Most Valuable Links for Ranking](papers/maxrank.pdf). Yao, H. 2012.

- Linear least-squares Dyna-style planning. Yao, H. Technical Report TR11-04, Department of Computing Science, University of Alberta. 2011.

- Off-policy learning with linear action models: an efficient "One-Collection-For-All-Solution". Yao, H. In workshop on "Planning and Acting with Uncertain Models" at the 28th ICML, Bellevue, Washington, USA. 2011. 

- [Dyna(k): A multi-step Dyna planning](papers/dynak.pdf). Yao, H., Sutton, R. S., Bhatnagar, S., Diao, D., and Szepesvari, Cs. ICML workshop on Abstraction in Reinforcement Learning, Montreal, Canada. June 2009. 

- [Multi-step linear Dyna-style planning](papers/multi-step-dyna.pdf). Yao, H., Bhatnagar, S., and Diao, D. NIPS, Vancouver, BC, Canada. 2009.


- [LMS-2: towards an algorithm that is as cheap as LMS and almost as efficient as RLS](papers/lms2.pdf). Yao, H., Bhatnagar, S., and Szepesvari, Cs. The Forty-eighth IEEE Control and Decision Conference (CDC), Shanghai, China. December 2009. 


- Temporal difference learning by direct preconditioning. Yao, H., Bhatnagar, S., and Szepesvari, Cs. Multidisciplinary Symposium on Reinforcement Learning (MSRL), Montreal, Canada. June 2009. 


- [Preconditioned temporal difference learning](papers/ptd.pdf). Yao, H., and Liu, Z-Q. ICML, Helsinki, Finland. June 2008. I appreciate the four reviewers (who all acceptted in the first review round) and all the reviewers who had spent their time reading this paper and given valuable feedbacks. 
 
This paper was a very hard one for me. It is in fact my first paper at a renowned conference (The MR algorithm, which is related, was published at the ISAIM which is a workshop). It was sumitted four times since 2006. The first time it was submitted, one reviewer said "this paper contains brilliant ideas", which greatly encouraged me. The paper was submitted again to NIPS 2007. The paper received a score/confidence from three reviewers (both out of ten): 8/10, 7/10, 5/2, and an average score of 7.27. However, finally the paper was rejected. A reviewer said: "I was really hoping for a paper like this which applies well-known concepts from linear algebra to recent RL algorithms that end up solving linear systems. It is really interesting to see the connection between LSTD and LSPE, both of them being variants of a general preconditioning method". The third reviewer indeed said "However, if I am a minority and other reviewers find this paper clear and understandable, my review should be wholly ignored." A bit pity is that there was just no discussion and my paper got a rejection. [nips 2007 review](papers/ptd_nips.htm). For this reason, I (at least try my best to) take extreme care in reviewing papers especially those that I feel I don't understand well enough to judge sometimes.


For decades (1992-), off-policy learning with linear function approximation is problematic. Importance sampling gives an unbiased estimate of the target value function using the data collected from the behavior policy. However, importance sampling methods suffer from high variances due to that the importance sampling ratios are high. Is there another way of conducting off-policy learning? Gradient TD stands for a unique off-policy learning paradigm with linear function approximation, forming an important class of modern reinforcement learning algorithms. If you have worked on, read or cited GTD, TDC, GTD2, GQ, and Horde, perhaps you should read this paper. I bet you will be surprised to find where the NEU objective function (the GTD objective function, defined in the TDC paper), and the "MSPBE" objective that derives TDC and GTD2 were from. This paper is also the first to proppose "Gradient Descent" for temporal difference learning. The TDC paper shows MSPBE in a number of equations. At the time, I simply derived from, C^{-1} A^T A --> ? Recall we need symmetry according to what we did for TD, A-->A^T A; so simply A^T C^{-1} A for the question mark. Read the start of Section 2 of the GTD paper and the "NEU" objective function in the TDC paper. Also read equation 4, around equation 13 and their contexts in the preconditioning paper. In short, GTD uses a symmetry idea for TD, and GTD2/TDC use both symmetry and preconditioning, which are both in the preconditioning paper. 

This figure from the preconditioning paper shows that GTD is slow. Wait. What? This was before the GTD was even submitted? Well, YES.

<div align="center">
<img align="center" src="papers/rates_gtd.png" style='height: 100%; object-fit: contain' class="inline"/>
</div>

This figure in fact shows that GTD is slow (in the steady-state sense). MR is the faster
version of iLSTD. iLSTD is the steady-state version of TD (TD cannot be faster than iLSTD). Check
the abstract of the TDC paper on what was found. 

<!--

I was also on the author list of the GTD2/TDC paper. One email sent by a coauthor of TDC said "** (another coauthor of TDC) had an idea of combining Hengshuai's PTD (preconditioning) with GTD". I even helped organize the weekly off-policy meeting that lead to the GTD2/TDC paper. 

I added this on my homepage on Oct. 14, 2022. I never talked to anybody on this including the students who work and worked with me. Only in the past half year, I talked to two persons whom I hoped can help solve this issue privately. However, the person in question never give me a word even though eventually the issue was clearly conveyed by one of the two persons (in the beginning I just hinted, to be considerate). As a past collaborator, alumni, and colleague, I've shown genuine sincereness and kindness in this matter. I waited another half year for the best hope. 

You may wonder why do I bring it up now? Well, is 14 years still not long enough (for someone to realize their mistakes)? Should I continue living with it? I wish you know how hard that has been. The two papers were written by my supervisor at the time. GTD was written a few months before I came to UofA. What can I do. I have been hoping this was talked over ever since 2008. Unfortunately this never happened. I also realize what a privilege to write on a research topic from this. As writers for future scientists, we should really be careful. 

I was also on the author list of the GTD2/TDC paper. You may wonder then why isn't your name there? Well, again, I don't know. One day I just found in my email box tons of emails on GTD and TDC. Some were during my interview for Ph.D candidacy at UofA, which is before the NIPS 2008 deadline. One email sent by a coauthor of TDC said "** (another coauthor of TDC) had an idea of combining Hengshuai's PTD (preconditioning) with GTD". I even organized the weekly off-policy meeting that lead to the GTD2/TDC paper. It's been disturbing to think about this. Aren't professors, supervisors and farthers leading us and setting good standards for doing research? What have gone wrong here? I always lost my words on this. I tried to ignore over the years. However, as I face it upfront, think and talk to myself, I think the journey of science is like our evolution process. It's not smooth. This issue is tiny if we zoom it to what's happening in the world. People in Ukraine are suffering. Many youngs from Ukraine and Russia died and some are still dying in this widely considered peace time. I found the big picture thoughts are the only way for me to ignore this disturbance and keep focused on the things on my mind.     

-->

- [Minimal residual approaches for policy evaluation in large sparse Markov chains](papers/mr.pdf). Yao, H., and Liu, Z-Q. The Tenth International Symposium on Artificial Intelligence and Mathematics (ISAIM), Fort Lauderdale, USA. January 2008. 

---
    
### Education: 
* Ph.D, University of Alberta, Computing Science, 2008--2014. 
* M.E, Tsinghua University, department of computer science and engineering, 2003--2006.
* B.S, Shandong University of Technology, department of mathematics, 1999--2003.  
* Zhaoyuan 1st Middle School, 1996--1999. 


### Thesis
- Model-based Reinforcement Learning with State and Action Abstractions. [Ph.D thesis](papers/yao_hengshuai_PhD.pdf), Hengshuai Yao, defended in 2015. 


### Volunteer service
* reviewing for AAAI, ICML, NIPS, UAI, AIStat, ADPRL(2014-2015), CIKM (2011-2013), WWW(2011-2013). ICML'22 Outstanding reviewer. 
* parent volunteering for Westbrook public school and Confed Hockey club. I like to watch these kids growing and interacting with their amazing smiles and passion of life. Recently I helped with the yearly Terry Fox run preparation. The roads on the windows were designed by me!

A fine Friday morning Alex doing a school patrol. Sis and Bro wanted to visit. They together with my wife taught me a lot things which I didn't imagine before having them.
<div align="center">
<img align="center" src="3hearts.jpeg" width="60%" height="60%" style='object-fit: contain' class="inline"/>
</div>


## Robocup Soccer 
I was a member of TsinghuAeolus (soccer simulation team at Tsinghua University) for World Cup Simulation League. 
Here shows a game of our team TsinghuAeolus playing against Everest in the final match at Robocup 2003. Our TsinghuAeolus was based on hierarchical reinforcement learning. Decisions the player has to make include: dribbling, passing, running, shooting, goal keeping, positioning (team position), resting, defending, etc. A high-level policy learns how to select a decision, and a low-level controller executes the selected decision. Both the high-level and low-level controller were learned using reinforcement learning.  
<div align="center">
<video src="videos/2d simulation game short.mp4" width="640" height="400" autoplay controls preload></video>
</div>

## Tetris
I developed a policy iteration algorithm to play a Tetris game. In this game, there are only hard shapes: "S" and "Z". The player was trained with data of randomly playing the game. 
<div align="center">  
<video src="videos/SZ tetris game short.mp4" width="640" height="400" autoplay controls preload></video>
</div>

---

### Students 
- Xing Chen, Ph.D student, cosupervised with Yi Chang and Hechang Chen, School of Artificial Intelligence, Jilin University. 2020--; Visiting Alberta from August 2022. 
- Zhaogeng Liu, Ph.D student, cosupervised with Yi Chang, School of Artificial Intelligence, Jilin University. 2021- 
- Yanqing Wu, Master student, cosupervised with Randy Goebel, Department of Computing Science, University of Alberta. September 2022--
- [Shangtong Zhang](http://shangtongzhang.github.io/), Department of Computing Science, University of Alberta. mentored 2018 summer, now an assistant professor at University of Virginia. Shangtong taught me what is productivity, creativity and persistence. 
- [Mennatullah Siam](https://scholar.google.com/citations?user=AVPds3kAAAAJ&hl=ar), Department of Computing Science, University of Alberta. mentored 2019. Now a postdoc at York University. Menna taught me what is real passion for research. 
- [Khuram Javed](https://scholar.google.com/citations?user=wG1tGakAAAAJ&hl=en), Department of Computing Science, University of Alberta, mentored in summer 2019, and I was learning "meta" from him.  
- [Chao Gao](https://cgao3.github.io/), Department of Computing Science, University of Alberta, mentored in summer 2019 to 2020 on MCTS. Chao taught me how MCTS works (however it appears I didn't learn well at that time; Only in 2022 I had a chance to better grasp it) and the game of Hex, for which he won the world Hex Tournament Champion twice. 
- [Abhishek Naik](https://abhisheknaik96.github.io/), Department of Computing Science, University of Alberta, mentored in summer 2019. Abhishek taught me why the widely used discounted-reward objective, which is the standard RL setting, does not make so much sense, in particular, for episodes that are very long. 
- [Yangchen Pan](https://scholar.google.ca/citations?user=QyAsyYEAAAAJ&hl=en), Department of Computing Science, University of Alberta, mentored in summer 2019. Yangchen taught me the backward model for model-based RL. 
- Yi Liu. Department of Mathematical and Statistical Sciences, University of Alberta. mentored in summer 2019. We were working on UCB and I was learning the mathematics behind UCB from him. 
- Nazmus Sakib, cosupervised with Hong Zhang, Department of Computing Science, University of Alberta. Nazmus graduated in 2020. Nazmus taught me what is positively making things possible with magic fingers from hard work. 
- Arash Pourzarabi, a talented student I mentored in 2019 summer, always missed by us in [PS752](https://www.cbc.ca/news/canada/edmonton/alberta-victims-plane-crash-iran-1.5418751). Together we were working on feature decorrelation in the context of reinforcement learning. One month ago before that, he and me we were having lunch at Phobulous near UofA and I always remember his smile and bright eyes. I sent him flowers on the memorial day held by UofA for this flight that carried a few students and professors. We need to make peace for the world. I should cherish life and do good things, including research. I will only work on and publish good things that I feel (very) confident that it can advance the state of the art of our science. If still not serious enough, I will add that the advancement has to be fundamental.     

问渠哪得清如许？为有源头活水来。This old poem was written by an ancient scholar about doing research. The verbal meaning of this poem is that, I ask the waterway (a small river often built in front of farmlands for crop irrigation), "Why is your water so clean?" (It answers) "Because there is always water flowing in". If science and research are the ocean, students are the creeks and rivers. This waterway theory is my principle of doing research and working with students. The verbal meaning of the poem probably emphasizes readings. This is also true for research. **I should always help students achieve their goals, improve science, respect all my reading sources and genuinely give credits according to the truth** (regardless of my preference). Yes, I desire my personal success too. This is always the same as the goals above.    

**If I benefit from a reading, I cite. Period.** I will never pretend I invented something by re-messaging other people's ideas. Code of conduct is the first thing I talk over with the students who work with me. 

<!-- 

## Openprice
The mobile App is the product of our startup Openprice which I cofounded in 2016. The app helps users manage their receipts and manage shopping.  

Uploading receipts and have it OCR-ed:
<video src="videos/upload receipt.mp4" width="640" height="400" autoplay controls preload></video>

Backend server extract structured data, send it back and display on user's phone:
<video src="videos/Receipt_details.mp4" width="640" height="400" autoplay controls preload></video>

Store search and catalog search (the girl on skype is Reka our App and UI designer)
<video src="videos/store search catalog search.mp4" width="640" height="400" autoplay controls preload></video>

Catalog we built (shown is Json format. The json files was injected to a MySQL database)
<video src="videos/catalogDemo2.mp4" width="640" height="400" autoplay controls preload></video>

-->

## Contact
my ccid "At@" ualberta.ca; the ccid is hengshu1

 


