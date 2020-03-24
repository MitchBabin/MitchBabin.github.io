---
title: Using the R Programming Language
position: 5
layout: oclareDocIndex.njk
tags:
  - documentation
---
R is a programming language with a focus on mathematics, statistical analysis and graphing. OCLaRE uses R to create plots using data from student inputs. The Plot component allows the use of fully customized R source code.

Note: The ggplot2 library is already included within the R source dialog. It is not necessary to include it by callinglibrary(ggplot2).

## Code for an example plot using the R ggplot2 library

```r
xValues <- c(.$concfe1,.$concfe2,.$concfe3,.$concfe4,.$concfe5)

av1 <- (.$abs11 + .$abs12) / 2

av2 <- (.$abs21 + .$abs22) / 2

av3 <- (.$abs31 + .$abs32) / 2

av4 <- (.$abs41 + .$abs42) / 2

av5 <- (.$abs51 + .$abs52) / 2

yValues <- c(av1, av2, av3, av4, av5)

mysample <- data.frame(xValues, yValues)

titleX <- mean(xValues)

titleY <- max(yValues, na.rm = FALSE)

r2Y <- titleY - titleY * 0.1

titleY <- titleY - titleY * 0.05

model <- lm(mysample$yValues ~ mysample$xValues)

intercept <- signif(coef(model)\[1], digits = 2)

slope <- signif(coef(model)\[2], digits = 2)

r2 = signif(summary(model)$r.squared, digits = 2)

symbol = "+"

if (intercept < 0) {
  symbol <- "-"
  intercept <- abs(intercept)
}

textlab <- paste("y = ",slope,"x ", symbol, " ",intercept, sep="")

myplot <- ggplot(mysample, aes(xValues, yValues))

myplotdrawn <- myplot + geom_point() + stat_smooth(method = "lm", col = "red", se = FALSE) + labs(x = "Concentration Iron Thiocyanate (mol/L)", y = "Average Absorbance", title = paste(strwrap("Figure 1. Calibration curve used to determine the concentration of iron in the food or environmental sample", width=70), collapse="\n"))

regression <- myplotdrawn + annotate("text", x = titleX, y = titleY, label = textlab, size = 5) + annotate("text", x = titleX, y = r2Y, label = paste("italic(R) ^ 2 == ", r2), size = 5, parse=T)

regression
```

## Details

```r
xValues <- c(.$concfe1,.$concfe2,.$concfe3,.$concfe4,.$concfe5)
av1 <- (.$abs11 + .$abs12) / 2
av2 <- (.$abs21 + .$abs22) / 2
av3 <- (.$abs31 + .$abs32) / 2
av4 <- (.$abs41 + .$abs42) / 2
av5 <- (.$abs51 + .$abs52) / 2
yValues <- c(av1, av2, av3, av4, av5)
```

Read values from student input fields into two lists, representing the x and y values of each point. X values are read as-is, whereas y values are computed from multiple fields.

```r
mysample <- data.frame(xValues, yValues)
```

Create a data frame using the x and y values specified earlier. R’s plotting functions use data frames as their model, and the data within shows up in the final product.

```r
titleX <- mean(xValues)
titleY <- max(yValues, na.rm = FALSE)
r2Y <- titleY - titleY * 0.1
titleY <- titleY - titleY * 0.05
```

Select a point within the plot to display an annotation with the equation of the regression line and the R2value. Annotations within a ggplot object must be added manually, and their coordinates are relative to the data within the plot.

```r
model <- lm(mysample$yValues ~ mysample$xValues)
intercept <- signif(coef(model)\[1], digits = 2)
slope <- signif(coef(model)\[2], digits = 2)
r2 = signif(summary(model)$r.squared, digits = 2)
```

Find the regression line and R2value for the data. For a linear regression, use R’s “lm” function (Linear Model) with the x and y values in the data frame created earlier. The function creates an lm object with information about the data.

To get the y-intercept of the regression line, use the “coef” function (Coefficient) with the linear model, with the argument ‘1’. For the slope, use the same function with the argument ‘2’. To find the R2value, use the “summary” function with the linear model, and read the r.squared variable. In this case, the slope, intercept, and R2have been reduced to 2 significant digits using the “signif” function.

```r
symbol = "+"
if (intercept < 0) {
  symbol <- "-"
  intercept <- abs(intercept)
}
textlab <- paste("y = ",slope,"x ", symbol, " ",intercept, sep="")
```

Prepare the text for the regression line equation annotation. To ensure consistency with formatting, the symbol for representing a positive or negative y-intercept is determined with a conditional statement.

R will prepend negative numbers with a ‘-’ sign. In the case of a negative intercept, change the symbol to a ‘-’, then use the absolute value function to remove the extra negative sign.

Use the “paste” function to build a string for the equation of the regression line.

```r
myplot <- ggplot(mysample, aes(xValues, yValues))
myplotdrawn <- myplot + geom_point() + 
stat_smooth(method = "lm", col = "red", se = FALSE) + 
labs(x = "Concentration Iron Thiocyanate (mol/L)", y = "Average Absorbance", title = paste(strwrap("Figure 1. Calibration curve used to determine the concentration of iron in the food or environmental sample", width=70), collapse="\n"))
```

Create a ggplot object using the data frame created earlier.

Set the properties of the plot:

* geom_point(): Create a scatter plot
* stat_smooth(method = "lm", col = "red", se = FALSE): Add a trend line to the plot. Use “se = FALSE” to omit the confidence interval
* labs(): Set the axis labels and title of the plot. For long titles that overflow the area of the plot, use the “strwrap” function (string wrap) to create multi-line titles.

```r
regression <- myplotdrawn + annotate("text", x = titleX, y = titleY, label = textlab, size = 5) + 
annotate("text", x = titleX, y = r2Y, label = paste("italic(R) ^ 2 == ", r2), size = 5, parse=T)
```

regression 

Add annotations to the plot for the regression line equation and R2value. Use the previously specified coordinates to set their positions. Finally, display the completed plot.