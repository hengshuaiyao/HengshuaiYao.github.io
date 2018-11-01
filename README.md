## About me:

Since 2017, I am working on reinforcement learning and deep learning for autonomous driving. We're hiring full-time and intern positions for reinforcement learning and robotics. 

In 2016, I was building an AI game player and a character AI module for NCSoft (California).  

In 2014, I was working on a mobile app startup (6 team members) in Edmonton during and after my PhD studies.  

From 2008 to 2014, I was studying my Ph.D at University of Alberta, working on Reinforcement Learning, Reinforcement Ranking and Web Search. 

## Research

<!-- 
### Our RLAD Lab:
- [Linglong Kong](http://www.mathstat.ualberta.ca/~lkong/) (2018.07-2019.07)
- Borislav Mavrin (2018.05-)
- [Yangchen Pan](https://ca.linkedin.com/in/yangchen-pan-59704471) (2018.05-)
- [Hao Chen](https://ca.linkedin.com/in/tomhaochen) (2016.11-)
- [Donglai Zhu](https://www.researchgate.net/profile/Donglai_Zhu) (2017.02-)
- [Shangtong Zhang](https://github.com/ShangtongZhang) (2018.04-2018.09)
- Hengshuai Yao (2017.02-)

- Model-based Hierarchical Reinforcement Learning for Behavior and Motion Planning. Yangchen Pan, Hengshuai Yao, Masoud Nosrati, Peyman Yadmellat, Elmira, Yunfei Zhang. 

- Fast DDPG Trained Offline by Data Sweeping. Shangtong Zhang, Hengshuai Yao. 2018. ICLR. 

- Learning Safe Maneuvers in Malicious Environment. ICRA, Nazmus, Shangtong Zhang, Hengshuai Yao, Hong Zhang. 2018. 

- Offline Deep Policy Iteration. Shangtong Zhang, Hengshuai Yao. 2019. JAIR. DDPG and DQN. Roboschool, Atari games. 

- Yangchen Pan, Hao Chen, Donglai Zhu, Hengshuai Yao, Option-conditioned Next Image Prediction and Expert Options for Model-based Reinforcement Learning: Precise Stopping-at-a-point, speed planning, pedestrian avoidance, ICRA, 2018. 

- Deep Reinforcement Learning without Target Networks. 
-->

### Thesis
- Yao, H. Model-based Reinforcement Learning with State and Action Abstractions. [Ph.D thesis](papers/yao_hengshuai_PhD.pdf), 2015. 

### Publication
- ACE: An Actor Ensemble Algorithm for Continuous Control with Tree Search. Shangtong Zhang, Hao Chen, Hengshuai Yao. AAAI, Honolulu, 2019. (acceptance rate 16.2%)

- QUOTA: The Quantile Option Architecture for Reinforcement Learning. Shangtong Zhang, Borislav Mavrin, Linglong Kong, Bo Liu, Hengshuai Yao. AAAI, Honolulu, 2019.

<!-- 
Faster DRL with Episodic Replay: not sure it works.  

- Deterministic Option-Critic and Gamma-Agents. [arxiv](), Shangtong Zhang and Hengshuai Yao. ICLR, 2018. 

- High-Precision Control for Autonomous Driving. Hao Chen, Shangtong, Hengshuai Yao. ICRA, 2018.

- Neural Map and Dyna-Net for Reinforcement Learning. Hengshuai Yao, 2018. 

- Inverse Reinforcement Learning for Autonomous Driving. Donglai Zhu, Hengshuai Yao, 2018. 

- Expert Representation for Fast Reinforcement Learning. Shangtong Zhang, Hao Chen, Hengshuai Yao, 2018.  

- Expert Replay for Reinforcement Learning. [arxiv](), Hengshuai Yao, Shangtong Zhang 2018. 

- Exploration using Distributional RL and UCB. Borislav Mavrin, Shangtong Zhang, Linglong Kong, Hengshuai Yao. AAAI, 2018.
-->

- Negative Log Likelihood Ratio Loss for Deep Neural Network Classification. Donglai Zhu, Hengshuai Yao, Bei Jiang, Peng Yu. [arxiv](https://arxiv.org/pdf/1804.10690.pdf), 2018.
    - Abstract: In deep neural network, the cross-entropy loss
function is commonly used for classification. Minimizing cross entropy
is equivalent to maximizing likelihood under
assumptions of uniform feature and class distributions. It
belongs to generative training criteria which does not directly
discriminate correct class from competing classes. We propose a
discriminative loss function with negative log likelihood ratio
between correct and competing classes. It significantly
outperforms the cross-entropy loss on the CIFAR-10 image
classification task.

- Donglai Zhu, Hao Chen, Hengshuai Yao, Masoud Nosrati, Peyman Yadmellat, Yunfei Zhang. Practical Issues of Action-conditioned Next Image Prediction. International Conference on Intelligent Transportation Systems (ITSC), [arxiv](https://arxiv.org/abs/1802.02975), 2018.

    - Abstract: The problem of action-conditioned image prediction in robotics is to
predict the expected next frame given the current camera frame the robot
observes and the action it selects. We provide the first comparison of two
recent popular models, Convolutional Dynamic Neural Advection (CDNA)
(Finn et al., 2016) and a feedforward model (Oh et al., 2015), especially for
image prediction on cars. Our major finding is that action tiling encoding
is the most important factor leading to the remarkable performance of the
CDNA model. We present a light-weight model by action tiling encoding
which has a single-decoder feedforward architecture same as Oh et al.
(2015). On a real driving dataset, the CDNA model achieves 0.3986*1e-3
MSE and 0.9836 Structure SIMilarity (SSIM) with a network size of about
12.6 million parameters. With a small network of fewer than 1 million
parameters, our new model achieves a comparable performance to CDNA
at 0.3613 * 1e-3 MSE and 0.9633 SSIM. Our model requires less memory,
is more computationally efficient and more advantageous to be used inside
self-driving vehicles.

- Yao, H. and Szepesvari, Cs. [Approximate Policy Iteration with Linear Action Models](papers/lamapi.pdf). Twenty-Sixth Conference on Artificial Intelligence. AAAI. Toronto, Canada. 2012. [bib](bib.txt)

    - Abstract: In this paper we consider the problem of finding a good policy
given some batch data. We propose a new approach, LAMAPI,
that first builds a so-called linear action model (LAM)
from the data and then uses the learned model and the collected
data in approximate policy iteration (API) to find a
good policy. A natural choice for the policy evaluation step
in this algorithm is to use least-squares temporal difference
(LSTD) learning algorithm. Empirical results on three benchmark
problems show that this particular instance of LAMAPI
performs competitively as compared with LSPI, both
from the point of view of data and computational efficiency.

- Yao, H., Szepesvari, Cs., Pires, B. A., and Zhang, X. 2014. [Pseudo-MDPs and Factored Linear Action Models](papers/pmdp.pdf). IEEE Symposium on Adaptive Dynamic Programming and Reinforcement Learning (IEEE ADPRL), Best student paper nomination, Orlando, Florida, USA. [bib](bib.txt)

    - Abstract: In this paper we introduce the concept of pseudo-MDPs to develop abstractions. Pseudo-MDPs relax the requirement that the transition kernel has to be a probability kernel. We show that the new framework captures many existing abstractions. We also introduce the concept of factored linear action models; a special case. Again, the relation of factored linear action models and existing works are discussed. We use the general framework to develop a theory for bounding the sub-optimality of policies derived from pseudo-MDPs. Specializing the framework, we recover existing results. We give a least-quares approach and a constrained optimization approach of learning the factored linear model as well as efficient computation methods. We demonstrate that the constrained optimization approach gives better performance than the least-squares approach with normalization.

- Yao, H., Sutton, R. S., Bhatnagar, S., Diao, D., and Szepesvari, Cs. [Dyna(k): A multi-step Dyna planning. Abstraction in Reinforcement Learning](papers/dynak.pdf). Montreal, Canada. June 2009. 


- Yao, H., Bhatnagar, S., and Diao, D. [Multi-step linear Dyna-style planning](papers/multi-step-dyna.pdf). Advances in Neural Information Processing Systems (NIPS) 22, Vancouver, BC, Canada. 2009.

    - Abstract: In this paper we introduce a multi-step linear Dyna-style planning algorithm. The
key element of the multi-step linear Dyna is a multi-step linear model that enables
multi-step projection of a sampled feature and multi-step planning based on
the simulated multi-step transition experience. We propose two multi-step linear
models. The first iterates the one-step linear model, but is generally computationally
complex. The second interpolates between the one-step model and the
infinite-step model (which turns out to be the LSTD solution), and can be learned
efficiently online. Policy evaluation on Boyan Chain shows that multi-step linear
Dyna learns a policy faster than single-step linear Dyna, and generally learns faster
as the number of projection steps increases. Results on Mountain-car show that
multi-step linear Dyna leads to much better online performance than single-step
linear Dyna and model-free algorithms; however, the performance of multi-step
linear Dyna does not always improve as the number of projection steps increases.
Our results also suggest that previous attempts on extending LSTD for online
control were unsuccessful because LSTD looks infinite steps into the future, and
suffers from the model errors in non-stationary (control) environments.

- Yao, H. Linear least-squares Dyna-style planning. Technical Report TR11-04, Department of Computing Science, University of Alberta. 2011.

### Temporal Difference Learning
- Yao, H., and Liu, Z-Q. [Preconditioned temporal difference learning](papers/ptd.pdf). The 25th International Conference on Machine learning (ICML), Helsinki, Finland. June 2008. 

    - Abstract: This paper extends many of the recent popular policy evaluation algorithms to a generalized framework that includes least-squares temporal difference (LSTD) learning, least-squares policy evaluation (LSPE) and a variant of incremental LSTD (iLSTD). The basis of this extension is a preconditioning technique that solves a stochastic model equation. This paper also studies three significant issues of the new framework: it presents a new rule of step-size that can be computed online, provides an iterative way to apply preconditioning, and reduces the complexity of related algorithms to near that of temporal difference (TD) learning.

- Yao, H., and Liu, Z-Q. [Minimal residual approaches for policy evaluation in large sparse Markov chains](papers/mr.pdf). The Tenth International Symposium on Artificial Intelligence and Mathematics (ISAIM), Fort Lauderdale, USA. January 2008. 
    - Abstract: We consider the problem of policy evaluation in a special
class of Markov Decision Processes (MDPs) where the underlying
Markov chains are large and sparse. We start from
a stationary model equation that the limit of Temporal Difference
(TD) learning satisfies, and develop a Robbins-Monro
method consistently estimating its coefficients. Then we introduce
the minimal residual approaches, which solve an approximate
version of the stationary model equation. Incremental
Least-squares temporal difference (iLSTD) is shown
to be a special form of minimal residual approaches. We also
develop a new algorithm called minimal residual (MR) algorithm
whose step-size can be computed on line. We introduce
the Compressed Sparse Row (CSR) format and reduce
the complexity of MR to near that of TD. The advantages of
the MR algorithm are that it has comparable data efficiency
and computational efficiency to iLSTD, but does not require
manual selection of step-size.

- Yao, H., Bhatnagar, S., and Szepesvari, Cs. [LMS-2: towards an algorithm that is as cheap as LMS and almost as efficient as RLS](papers/lms2.pdf). The Forty-eighth IEEE Control and Decision Conference (CDC), Shanghai, China. December 2009. [bib](bib.txt)

    - Abstract: We consider linear prediction problems in a stochastic environment. The least mean square (LMS) algorithm is a well-known, easy to implement and computationally cheap solution to this problem. However, as it is well known, the LMS algorithm, being a stochastic gradient descent rule, may converge slowly. The recursive least squares (RLS) algorithm overcomes this problem, but its computational cost is quadratic in the problem dimension. In this paper we propose a two timescale stochastic approximation algorithm which, as far as its slower timescale is considered, behaves the same way as the RLS algorithm, while it is as cheap as the LMS algorithm. In addition, the algorithm is easy to implement. The algorithm is shown to give estimates that converge to the best possible estimate with probability one. The performance of the algorithm is tested in two examples and it is found that it may indeed offer some performance gain over the LMS algorithm.

- Yao, H., Bhatnagar, S., and Szepesvari, Cs. Temporal difference learning by direct preconditioning. Multidisciplinary Symposium on Reinforcement Learning (MSRL), Montreal, Canada. June 2009. 

- Yao, H. Off-policy learning with linear action models: an efficient "One-Collection-For-All-Solution". In workshop on "Planning and Acting with Uncertain Models" at the 28th ICML, Bellevue, Washington, USA. 2011. 

- Peyman Yademellat, Masoud Nosrati, Yunfei Zhang, Hengshuai Yao, Hongbo Zhang, Jun Luo, Reinforcement learning-based behavior planning and evaluation framework for autonomous driving, 2018.  

- Yao, H., Szepesvari, Cs., Sutton, R., and Bhatnagar,S. 2014. [Universal Option Models](papers/uom.pdf). NIPS. Montreal, Quebec, Canada. [bib](bib.txt)

    - Abstract: We consider the problem of learning models of options for real-time abstract planning, in the setting where reward functions can be specified at any time and their expected returns must be efficiently computed. We introduce a new model for an option that is independent of any reward function, called the universal option model (UOM). We prove that the UOM of an option can construct a traditional option model given a reward function, and also supports efficient computation of the option-conditional return. We extend the UOM to linear function approximation, and we show the UOM gives the TD solution of option returns and the value function of a policy over options. We provide a stochastic approximation algorithm for incrementally learning UOMs from data and prove its consistency. We demonstrate our method in two domains. The first domain is a real-time strategy game, where the controller must select the best game unit to accomplish a dynamically-specified task. The second domain is article recommendation, where each user query defines a new reward function and an article's relevance is the expected return from following a policy that follows the citations between articles. Our experiments show that UOMs are substantially more efficient than previously known methods for evaluating option returns and policies over options.

- Yao, H. and Schuurmans, D. 2013. [Reinforcement Ranking](papers/rr.pdf). 
    - Abstract: We introduce a new framework for web page ranking -- reinforcement ranking -- that improves the stability and accuracy of Page Rank while eliminating the need for computing the stationary distribution of random walks. Instead of relying on teleportation to ensure a well defined Markov chain, we develop a reverse-time reinforcement learning framework that determines web page authority based on the solution of a reverse Bellman equation. In particular, for a given reward function and surfing policy we recover a well defined authority score from a reverse-time perspective: looking back from a web page, what is the total incoming discounted reward brought by the surfer from the page's predecessors? This results in a novel form of reverse-time dynamic-programming/ 	reinforcement-learning problem that achieves several advantages over Page Rank based methods: First, stochasticity, ergodicity, and irreducibility of the underlying Markov chain is no longer required for well-posedness. Second, the method is less sensitive to graph topology and more stable in the presence of dangling pages. Third, not only does the reverse Bellman iteration yield a more efficient power iteration, it allows for faster updating in the presence of graph changes. Finally, our experiments demonstrate improvements in ranking quality.
    
- Lee, C., Yao, H., He, X., Su, C., and Chang, J-Y. 2014. [A System to Predict Future Popularity: Learning to Classify](papers/trending.pdf). WWW (poster), Seol,Korea. 
    - Abstract: Among the many tasks driven by very large scaled web
search queries, it is an interesting task to predict how likely
queries about a topic become popular (a.k.a. trending or
buzzing) as the news in the near future, which is known as
?Detecting trending queries.? This task is nontrivial since
the realization of buzzing trends of queries often requires
sufficient statistics through users? activities. To address
this challenge, we propose a novel framework that predicts
whether queries become trending in the future. In principle,
our system is built on the two learners. The first is
to learn dynamics of time series for queries. The second,
our decision maker, is to learn a binary classifier that determines
whether queries become trending. Our framework
is extremely efficient to be built taking advantage of the
grid architecture that allows to deal with the large volume
of data. In addition, it is flexible to continuously adapt as
trending patterns evolve. The experiments results show that
our approach achieves high quality of accuracy (over 77.5\%
true positive rate) and yet detects much earlier (on average
29 hours advanced) than that of the baseline system.

- Yao, H. 2012. [MaxRank: Discovering and Leveraging the Most Valuable Links for Ranking](papers/maxrank.pdf)
    - Abstract: On the Web, visits of a page are often introduced by one or more valuable linking sources. Indeed, good back links are valuable resources for Web pages and sites. We propose to discovering and leveraging the best backlinks of pages for ranking. Similar to PageRank, MaxRank scores are updated {recursively}. In particular, with probability lambda, the MaxRank of a document is updated from the backlink source with the maximum score; with probability 1?lambda, the MaxRank of a document is updated from a random backlink source. MaxRank has an interesting relation to PageRank. When lambda=0, MaxRank reduces to PageRank; when lambda=1, MaxRank only looks at the best backlink it thinks. Empirical results on Wikipedia shows that the global authorities are very influential; Overall large lambda (but smaller than 1) perform best: the convergence is dramatically faster than PageRank, but the performance is still comparable. We study the influence of these sources and propose a few measures such as the times of being the best backlink for others, and related properties of the proposed algorithm. The introduction of best backlink sources provides new insights for link analysis. Besides ranking, our method can be used to discover the most valuable linking sources for a page or Website, which is useful for both search engines and site owners.
    
- Yao, H., Sutton R. and Rafiei D. [A Study of Temporal Citation Count Prediction using Reinforcement Learning](papers/citation.pdf). accepted by IEEE Transaction on Cybernetics-part B, 2014. 

    - Abstract: In a recently studied problem, Yan et. al. (2011)
studied predicting the count of citations that already happened
using pair-wise machine learning. Predicting the number of
future citations based on only the past data is obviously more
practical and more challenging. In this paper, we study the
problem of temporal prediction of citation counts for academic
papers. We propose a model-free method and a model-based
method, respectively for predicting citation counts in both long
and short terms. We extend the citation count measure to a
general value function, which forms the basics for our application
of reinforcement learning (RL). Our methods are based on two
RL algorithms, least-squares temporal difference (LSTD) and
linear Dyna. Our methods use quite a few novel features including
those from citing papers and historical citation counts as well as
those based on authors, keywords, and venues. Empirical results
show that temporal prediction has its unique difficulties, and the
pair-wise supervised learning methods can be unstable. Both our
methods produce stable and accurate predictions. In addition,
results also suggest that, unlike previous citation count prediction
results, temporal prediction of citation count in a longer time
span is less accurate. This highlights the need to study the
temporal prediction problem and develop accurate predictors.

### Reviewing
- NIPS 2018. Reviewer.
- ICML 2018. Program Committee Member.
- AAAI 2018. Program Committee Member
- AIStat 2018. Program committee member.
- ACML 2017. Program Committee Member
- NIPS 2017. Reviewer.
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

