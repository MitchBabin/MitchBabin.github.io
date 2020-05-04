---
title: Student Data Flow (Input and Output)
position: 5
layout: oclareDocIndex.njk
tags:
  - documentation
---
# Student Input

#### Variable Name

When you create input fields, you must assign it a unique identifier in Variable Name. Within a lab, no two inputs should share this identifier, unless you want the values to be the same across sections.

#### Field Type

Field type determines how a student can input, as well as what is valid input.

* String: Can consist of about a sentence of words
* Number: Can be a number, including scientific notation. Validation allows you to define a range the number can be within.
* Text: Can be up top an allotted number of characters, as well as images, with student's choice of formatting.

![Student Input Dialog](/Images/cms/annotation-2020-05-04-125927.png "Student Input Dialog")

# Student Output

The use of these variables becomes more apparent in their output. Using Student Input, you can then use Inputs of the same Variable Name in report generation to display the values as part of the report. Additionally, you can use data entered into Student Inputs to compute values using computed fields. You can find out more on how to do this at the computed fields doc page.