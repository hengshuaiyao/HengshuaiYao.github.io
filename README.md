<img align="left" src="videos/head_picture1.jpeg" width="25%" height="25%" alt="hengshuai yao" class="inline"/>

I'm an adjunct professor at Department of Computing Science, University of Alberta. 
My research interest is model-based reinforcement learning with a recent focus on gradient descent especially step-size adaptation. 

I studied reinforcement learning at the RLAI lab from 2008 to 2014 in a Ph.D program at the same department. I worked on offline model-based approximate policy iteration, multi-step linear Dyna-style planning, a novel reinforcement learning perspective for PageRank, and Webpage ranking and Web search. I did an internship with Yahoo! Sunnyvale in 2013 and won a championship (CEO award) for "TrendingNow" (check yahoo.com at the top right corner) that detects trending topics in Yahoo search engine. I joined NCSoft game studio in San Francisco in 2016 working on reinforcement learning for mobile games. I joined Huawei in 2017 and founded joint lab projects between University of Alberta and Huawei. 



### Education: 
* M.E, Tsinghua University, department of computer science and engineering, 2003--2006.
* B.S, Shandong University of Technology, department of mathematics, 1999--2003.  
* Zhaoyuan 1st Middle School, 1996--1999. 

### Thesis
- Model-based Reinforcement Learning with State and Action Abstractions. [Ph.D thesis](papers/yao_hengshuai_PhD.pdf), Hengshuai Yao, 2015. Thesis supervisor: [Csaba Szepesvari](https://sites.ualberta.ca/~szepesva/index.html). 

### Publication

- [Learning to Accelerate by the Methods of Step-size Planning](https://arxiv.org/abs/2204.01705). Hengshuai Yao. arXiv:2204.01705. 2022. 

In this paper, I discussed (1) why negative step-sizes make sense; (2) why the diagonal-matrix step-size is suitable for optimization and deep learning; (3) why we should treat gradient descent update as data; and (4) Is it posible to use the gradient descent update data to learn and plan step-sizes?

All the above four questions can be understood from this figure in the paper. 
<div align="center">
<img align="center" src="videos/csawg_illustration.png" alt="hi" class="inline"/>
</div>

- A Roller Coaster View of Gradient Descent. Hengshuai Yao, Slides for the "learning to accelerate" paper. AI Seminar, University of Alberta. June 3rd. 2022. [(Keynote file with animation)](https://drive.google.com/file/d/1JXz8FFPxlcRHlk_8WpiSwrQLW4Fsiy34/view?usp=sharing) [(pdf file)](https://drive.google.com/file/d/1R4BLZ5COwgslX2G63mBXHdfiHBoIBleD/view?usp=sharing)

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

- [Distributional Reinforcement Learning for Efficient Exploration](https://arxiv.org/abs/1905.06125). Borislav Mavrin, Shangtong Zhang, Hengshuai Yao, Linglong Kong, Kaiwen Wu and Yaoliang Yu. ICML, Long Beach, USA. 2019.

Here is the testing performance of a low-quantile $Q_{0.1}$ driving in CARLA (A 3D driving simulator) in a safety-based reward function as we have more and more samples. This motivates "Distributional Reinforcement Learning"! 

<div align="center">
<img align="center" src="videos/carla_dltv.png" alt="hi" class="inline"/>
</div>

- [Deep Reinforcement Learning with Decorrelation](https://arxiv.org/abs/1903.07765). Borislav Mavrin, Hengshuai Yao, and Linglong Kong, 2019. 

<div align="center">
<img align="center" src="videos/dqn_decor.png" alt="hi" class="inline"/>
</div>

- [Reinforcing Classical Planning for Adversary Driving Scenarios](papers/iros_final.pdf). Nazmus Sakib, Hengshuai Yao, Hong Zhang. Preprint, March 2019. Video:

<div align="center">
<iframe align= "middle" width="750" height="400" src="https://www.youtube.com/embed/9BFYX1WRjtA" frameborder="0" allowfullscreen></iframe>
</div>

- [Exploration in the face of Parametric and Intrinsic Uncertainties](papers/dltv_aamas19.pdf). Borislav Mavrin, Shangtong Zhang, Hengshuai Yao, Linglong Kong. AAMAS, Montreal, Canada. 2019.

- [ACE: An Actor Ensemble Algorithm for Continuous Control with Tree Search](https://arxiv.org/abs/1811.02696). Shangtong Zhang, Hao Chen, Hengshuai Yao. AAAI, Honolulu, 2019. (acceptance rate 16.2%)

- [QUOTA: The Quantile Option Architecture for Reinforcement Learning](https://arxiv.org/abs/1811.02073). Shangtong Zhang, Borislav Mavrin, Linglong Kong, Bo Liu, Hengshuai Yao. AAAI (Oral presentation), Honolulu, 2019.

- [Negative Log Likelihood Ratio Loss for Deep Neural Network Classification](https://arxiv.org/pdf/1804.10690.pdf). Future Technologies Conference. Hengshuai Yao, Donglai Zhu, Bei Jiang, Peng Yu, San Francisco, USA. 2019.

- [Towards Comprehensive Maneuver Decisions for Lane Change Using Reinforcement Learning](https://openreview.net/forum?id=SJe9yugRcm). Chen Chen, Jun Qian, Hengshuai Yao, Jun Luo, Hongbo Zhang, Wulong Liu. NIPS Workshop on Machine Learning for Intelligent Transportation Systems (MLITS). 2018. 

- [Monte-Carlo Tree Search vs. Model-Predictive Controller: A Track-Following Example](https://openreview.net/forum?id=SyiF5-23Z&noteId=S1y46fu1M).  NIPS Workshop on Machine Learning for Intelligent Transportation Systems (MLITS), Hengshuai Yao, Masoud S. Nasrati, Kasra Rezaee. Long Beach, USA. 2017. Video:

<div align="center">
<iframe align="center" width="630" height="474" src="https://www.youtube.com/embed/YP7qPJSJAVU" frameborder="0" allowfullscreen></iframe>
</div>

- [Practical Issues of Action-conditioned Next Image Prediction](https://arxiv.org/abs/1802.02975). Donglai Zhu, Hao Chen, Hengshuai Yao, Masoud Nosrati, Peyman Yadmellat, Yunfei Zhang. IEEE International Conference on Intelligent Transportation Systems (ITSC), 2018.

- [Approximate Policy Iteration with Linear Action Models](papers/lamapi.pdf). Yao, H. and Szepesvari, Cs. Twenty-Sixth Conference on Artificial Intelligence. AAAI. Toronto, Canada. 2012. 

- [Pseudo-MDPs and Factored Linear Action Models](papers/pmdp.pdf). Yao, H., Szepesvari, Cs., Pires, B. A., and Zhang, X. IEEE Symposium on Adaptive Dynamic Programming and Reinforcement Learning (IEEE ADPRL), Best student paper nomination, Orlando, Florida, USA, 2014. 

- [Dyna(k): A multi-step Dyna planning](papers/dynak.pdf). Yao, H., Sutton, R. S., Bhatnagar, S., Diao, D., and Szepesvari, Cs. ICML workshop on Abstraction in Reinforcement Learning, Montreal, Canada. June 2009. 

- [Multi-step linear Dyna-style planning](papers/multi-step-dyna.pdf). Yao, H., Bhatnagar, S., and Diao, D. NIPS, Vancouver, BC, Canada. 2009.

- Linear least-squares Dyna-style planning. Yao, H. Technical Report TR11-04, Department of Computing Science, University of Alberta. 2011.

- [Preconditioned temporal difference learning](papers/ptd.pdf). Yao, H., and Liu, Z-Q. ICML, Helsinki, Finland. June 2008. 

- [Minimal residual approaches for policy evaluation in large sparse Markov chains](papers/mr.pdf). Yao, H., and Liu, Z-Q. The Tenth International Symposium on Artificial Intelligence and Mathematics (ISAIM), Fort Lauderdale, USA. January 2008. 
   
- [LMS-2: towards an algorithm that is as cheap as LMS and almost as efficient as RLS](papers/lms2.pdf). Yao, H., Bhatnagar, S., and Szepesvari, Cs. The Forty-eighth IEEE Control and Decision Conference (CDC), Shanghai, China. December 2009. 

- Temporal difference learning by direct preconditioning. Yao, H., Bhatnagar, S., and Szepesvari, Cs. Multidisciplinary Symposium on Reinforcement Learning (MSRL), Montreal, Canada. June 2009. 

- Off-policy learning with linear action models: an efficient "One-Collection-For-All-Solution". Yao, H. In workshop on "Planning and Acting with Uncertain Models" at the 28th ICML, Bellevue, Washington, USA. 2011. 

- [Universal Option Models](papers/uom.pdf). Yao, H., Szepesvari, Cs., Sutton, R., and Bhatnagar,S. 2014. NIPS. Montreal, Quebec, Canada. 

- [Reinforcement Ranking](papers/rr.pdf). Yao, H. and Schuurmans, D. 2013. 
    
- [A System to Predict Future Popularity: Learning to Classify](papers/trending.pdf). Lee, C., Yao, H., He, X., Su, C., and Chang, J-Y. WWW (poster), Seol,Korea, 2014. 

- [MaxRank: Discovering and Leveraging the Most Valuable Links for Ranking](papers/maxrank.pdf). Yao, H. 2012.
       
-  [A Study of Temporal Citation Count Prediction using Reinforcement Learning](papers/citation.pdf). Yao, H., Sutton R. and Rafiei D. accepted by IEEE Transaction on Cybernetics-part B, 2014. 

### Reviewing
AAAI, ICML, NIPS, UAI, ADPRL, AIStat, CIKM, WWW.

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
hengshu1 "At@" ualberta.ca

## Life
I live in Edmonton with my family, Dongcui, Alex, Marissa, and Dylan. Our favourite activity is to follow our cat Benji for a spiritual trail exploration. 


