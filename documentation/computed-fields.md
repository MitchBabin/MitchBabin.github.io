---
title: Computed Fields
position: 4
layout: oclareDocIndex.njk
tags:
  - documentation
---
### Using Computed Fields

While you can use the R scripting language to compute fields, you don't need prior knowledge it to use them. You can apply basic arithmetic to any student input by using the ID you've assigned to the student input and any applicable mathematical or logical operators.

### Mathematical Operators

Computed fields support all the basic mathematical operators, addition, subtraction, division and multiplication, and in correct order of operations. You can also use exponents by using `**` to raise the left number to the power of the right. Additionally, computed fields support modulus, which calculates the remainder of a division. You can use modulus by using the `%` symbol.\
\
Note that student inputs should be number fields when you want to create computed fields from them , as string or text fields may cause unforeseen errors.

#### Available Mathematical Operators

* `+` (Addition)
* `-` (Subtraction)
* `/` (Division)
* `%` (Modulus, or remainder)

### Logical Operators

Logical operators produce one of two results, `true` or `false`, which are presented by `1` and `0` respectively. Computed fields supports less than, less than or equal to, more than, more than or equal to as well as equals and in. Like mathematical operators, they can only be applied to numbers except for the `in` keyword and the `==` comparator.\
\
The `in` keyword checks for a specific string in a student input, returning true if found, and false otherwise. This is different from the `==` operator, in that the `==` operator only returns true if the strings are exactly the same, including capitalization.

#### Available Logical Operators

* `==` (Equality)
* `in` (Contained within)
* `>` (Greater than)
* `<` (Less than)
* `>=` (Greater than or equal to)
* `<=` (Less than or equal to)

### Class Computed Fields

To use the class's collective data for any given field, simply use the same name in all capital letters. You can apply statistical transformations to those groups of data such as mean or standard deviation using the name of the function before the bracketed value. For example, to get the mean of a class's input named iron_concentration you would use MEAN(IRON_CONCENTRATION).

### Significant Figures

The significant figures input dictates what decimal point the field will round to after calculations. Choose ignore if you don't want any rounding at all.

### Available Functions

#### The following functions are those which operate on a single value

* `LN` (Natural logarithm)
* `LOG` (Logarithm)
* `SQRT` (Square root)
* `COS` (Cosine)
* `SIN` (Sine)
* `TAN` (Tangent)
* `ACOS` (Arc Cosine)
* `ASIN` (Arc Sine)
* `ATAN` (Arc Tangent)
* `COSH` (Hyperbolic Cosine)
* `SINH` (Hyperbolic Sine)
* `TANH` (Hyperbolic Tangent)
* `ACOSH` (Hyperbolic Arc Cosine)
* `ASINH` (Hyperbolic Arc Sine)
* `ATANH` (Hyperbolic Arc Tangent)
* `ABS` (Absolute Value)

#### The following functions take two arguments

* `POW` (Power: Returns the first argument raised to the power of the second argument)
* `ROUND` (Rounding: Returns the argument one rounded to argument two decimal places)

#### These functions operate on a list of values

* `MAX` (Returns the maximum value in a list)
* `MIN` (Returns the minimum value in a list)
* `SUM` (Returns the sum of values in the list)
* `LEN` (Returns the count of how many values are in the list)
* `MEAN` (Returns the mean of the values in the list)
* `STDDEV` (Returns the standard deviation of the values in the list)
* `MEDIAN` (Returns the median value of the list)

#### Logical operators

* `IF` (condition, true value, false value) 

#### The R function

The `R` function and must be called with a string representing an R statement, worth noting is that triple quotes (ie `"""statement"""`) can be used which allow for multi-line statements

* `R`

#### Constants

The following constants are defined as well

* `E`
* `PI`