# Project Euler, #23: Non-Abundant Sums

**Mathematical Foundations:**

> **Definition: Perfect Number**
> A positive integer *n* is **perfect** if the sum of its proper divisors (divisors excluding *n* itself) is equal to *n*. Example: 28 is perfect, as 1 + 2 + 4 + 7 + 14 = 28.
>
> **Definition: Deficient and Abundant Numbers**
> A positive integer *n* is **deficient** if the sum of its proper divisors is strictly less than *n*. It is **abundant** if the sum of its proper divisors is strictly greater than *n*.
>
> **Properties of Abundant Numbers:**
> * 12 is the smallest abundant number (1 + 2 + 3 + 4 + 6 = 16 > 12).
> * 24 is the smallest positive integer that can be expressed as the sum of two abundant numbers.
> * **Theorem:** All integers greater than 28123 can be expressed as the sum of two abundant numbers.
> * **Note:** The upper bound of 28123, derived from mathematical analysis, is not a tight bound. The greatest integer that cannot be represented as the sum of two abundant numbers is strictly less than 28123.

<sub>⎯ Adapted from Project Euler Problem 23, CC BY-NC-SA 4.0</sub>

**Problem Statement:**

> Determine the sum of all positive integers that cannot be represented as the sum of two abundant numbers.
