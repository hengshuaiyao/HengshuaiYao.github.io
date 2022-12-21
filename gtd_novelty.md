---
title: The GTD and GTD2/TDC papers
layout: template
---

<div align="center">
<img align="center" src="papers/gtd_sec2.png" alt="hi" width="80%" class="inline"/>
</div>

GTD's convergence is possible because the O.D.E is stablized by $A^TA$ instead of the problematic $A$ in TD for off-policy learning. 

<div align="center">
<img align="center" src="papers/gtd_novelty.png" alt="hi" width="60%" class="inline"/>
</div>

<div align="center">
<img align="center" src="papers/tdc_neu.png" alt="hi" width="50%" class="inline"/>
</div>
Was "NEU" new in what sense?

<div align="center">
<img align="center" src="papers/tdc_explains.png" alt="hi" width="60%" class="inline"/>
</div>

GTD2/TDC is faster than GTD because 

(i) $AB$ and $BA$ have the same eigenvalues. Assume $(\lambda,\xi)$ is an eigenvalue-eigenvector pair of $AB$, $AB\xi = \lambda \xi$. 
Then we need to show that there exists some vector $\eta$ such that $BA\eta = \lambda \eta$.  Note that $BA(B\xi) = B(AB\xi) = B(\lambda \xi) = \lambda (B\xi)$, 
which means $\eta=B\xi$ is the eigenvector of $BA$ with the eigenvalue $\lambda$. This also applies when $\lambda=0$. 
This is important becasue it covers the case when the off-policy TD's $A$ is not necessarily non-singular. 
In Theorem 4.1, the assumption of a non-singular $A$ is not necessary. If $A$ is singular, the GTD algorithm still converges to a solution to $Ax+b=0$, which has infinitely many solutions. 

(ii) In the preconditiong paper, I showed that the iteration with $C^{-1}A^TA$ is faster by improving the spectral properties of $A^TA$. 
According to (i), $C^{-1}A^TA$ has the same **set** of eigenvalues with $A^TC^{-1}A$. Let's use $A^TC^{-1}A$ as the iteration matrix then. 
The GTD2/TDC paper is a warping of the preconditioned update. This lead to the so-called MSPBE in the GTD2/TDC paper. In short, the GTD2/TDC paper exploits both **symmetry** and **preconditioning**, both were proposed in the preconditioning paper. 


