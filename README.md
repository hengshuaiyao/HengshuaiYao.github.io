## About me:

I am currently doing research on Reinforcement Learning and Deep Learning at Huawei Research Lab. Before that, I was building an AI game player and a character AI module for NCSoft in California.  

I had spent two years working on a mobile app startup (6 team members) in Edmonton during and after my PhD studies.  

When doing my Ph.D at University of Alberta (2008--2014), I was working on Reinforcement Learning, Reinforcement Ranking and Web Search. 

## Research

### Thesis
- Yao, H. Model-based Reinforcement Learning with State and Action Abstractions. [Ph.D thesis](papers/yao_hengshuai_PhD.pdf), 2015. 

### Action-model based RL
- Yao, H. and Szepesvari, Cs. [Approximate Policy Iteration with Linear Action Models](papers/lamapi.pdf). Twenty-Sixth Conference on Artificial Intelligence. AAAI. Toronto, Canada. 2012. [bib](bib.txt)
- Yao, H., Szepesvari, Cs., Pires, B. A., and Zhang, X. 2014. [Pseudo-MDPs and Factored Linear Action Models](papers/pmdp.pdf). IEEE Symposium on Adaptive Dynamic Programming and Reinforcement Learning (IEEE ADPRL), Best student paper nomination, Orlando, Florida, USA. [bib](bib.txt)

### Dyna-style Planning
- Yao, H., Sutton, R. S., Bhatnagar, S., Diao, D., and Szepesvari, Cs. [Dyna(k): A multi-step Dyna planning. Abstraction in Reinforcement Learning](papers/dynak.pdf). Montreal, Canada. June 2009. 
- Yao, H., Bhatnagar, S., and Diao, D. [Multi-step linear Dyna-style planning](papers/multi-step-dyna.pdf). Advances in Neural Information Processing Systems (NIPS) 22, Vancouver, BC, Canada. 2009.
- Yao, H. Linear least-squares Dyna-style planning. Technical Report TR11-04, Department of Computing Science, University of Alberta. 2011.

### Temporal Difference Learning
- Yao, H., and Liu, Z-Q. [Preconditioned temporal difference learning](papers/ptd.pdf). The 25th International Conference on Machine learning (ICML), Helsinki, Finland. June 2008. 
- Yao, H., and Liu, Z-Q. [Minimal residual approaches for policy evaluation in large sparse Markov chains](papers/mr.pdf). The Tenth International Symposium on Artificial Intelligence and Mathematics (ISAIM), Fort Lauderdale, USA. January 2008. 
- Yao, H., Bhatnagar, S., and Szepesvari, Cs. Temporal difference learning by direct preconditioning. Multidisciplinary Symposium on Reinforcement Learning (MSRL), Montreal, Canada. June 2009. 
- Yao, H., Bhatnagar, S., and Szepesvari, Cs. [LMS-2: towards an algorithm that is as cheap as LMS and almost as efficient as RLS](papers/lms2.pdf). The Forty-eighth IEEE Control and Decision Conference (CDC), Shanghai, China. December 2009. [bib](bib.txt)

### Off-policy Learning
- Yao, H. Off-policy learning with linear action models: an efficient "One-Collection-For-All-Solution". In workshop on "Planning and Acting with Uncertain Models" at the 28th ICML, Bellevue, Washington, USA. 2011. 

### Options
- Yao, H., Szepesvari, Cs., Sutton, R., and Bhatnagar,S. 2014. [Universal Option Models](papers/uom.pdf). NIPS. Montreal, Quebec, Canada. [bib](bib.txt)

### Web Search
- Yao, H. and Schuurmans, D. 2013. [Reinforcement Ranking](papers/rr.pdf). 
- Lee, C., Yao, H., He, X., Su, C., and Chang, J-Y. 2014. [A System to Predict Future Popularity: Learning to Classify](papers/trending.pdf). WWW (poster), Seol,Korea. 
- Yao, H. 2012. [MaxRank: Discovering and Leveraging the Most Valuable Links for Ranking](papers/maxrank.pdf)
- Yao, H., Sutton R. and Rafiei D. [A Study of Temporal Citation Count Prediction using Reinforcement Learning](papers/citation.pdf). 

### Reviewing
- ACML 2017. Program Committee Member
- NIPS 2017. reviewer.
- ICML 2017. Program Committee Member.
- AIStats 2017, program committee member.
- CIKM 2016, program committee member (research and industry track).
- ICML 2016, reviewer. 
- NIPS 2016, reviewer.
- WWW 2015, 2016, pc member (on web search)
- The First Workshop on Heterogeneous Information Access at WSDM 2015, pc member.
- IEEE Symposium on Adaptive Dynamic Programming and Reinforcement Learning(ADPRL) 2014, pc member.


## Robocup Soccer 

a game of our team. The player was based on hierachical reinforcement learning. Decisions the player has to make include: dribbling, passing, running, shooting, goal keeping, positioning (team position), resting, defending, etc. A high-level policy learns how to select a decision, and a low-level controller executes the selected decision. Both the high-level and low-level contoller were learned using reinforcement learning.  
<video src="videos/2d simulation game short.mp4" width="640" height="400" autoplay controls preload></video>

Keeping ball away from opponents is a basic skill at the lower level in the hierachical of the decision module of the soccer player. The player was trained using a nueral network to dribble or pass the ball, or run to an advantage positon. 
<video src="videos/KeepBallawayFromOpponents.mp4" width="640" height="400" autoplay controls preload></video>

## Tetris
Using a policy iteration algorithm to play a tetris game. In this game, only considering the "S" and "Z" shapes (harder than the original game). The player was trained with data of randomly playing the game.   
<video src="videos/SZ tetris game short.mp4" width="640" height="400" autoplay controls preload></video>

## Openprice
The mobile App is the product of our startup Openprice. The app helps users manage their receipts and manage shopping.  

Uploading receipts and have it OCR-ed:
<video src="videos/upload receipt.mp4" width="640" height="400" autoplay controls preload></video>

Backend server extract structured data, send it back and display on user's phone:
<video src="videos/Receipt_details.mp4" width="640" height="400" autoplay controls preload></video>

Store search and catalog search (the girl on skype is Reka our App and UI designer)
<video src="videos/store search catalog search.mp4" width="640" height="400" autoplay controls preload></video>

Catalog we built (shown is Json format. The json files was injected to a MySQL database)
<video src="videos/catalogDemo2.mp4" width="640" height="400" autoplay controls preload></video>


## Arduino
Motorcycle robot I made from my son's toy. 
<video src="videos/Motorcycle v1.mp4" width="640" height="400" autoplay controls preload></video>

Robot car with collision avoidance and looking for drivable area:
<video src="videos/first run of arduino robot car.mp4" width="640" height="400" autoplay controls preload></video>

Hacking Nema-17 to run a high speed
<video src="videos/nema17-A4988-high-rpm-speed.mp4" width="640" height="400" autoplay controls preload></video>
