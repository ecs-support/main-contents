---
# Course title, summary, and position.
linktitle: List Comprehensions
summary: List comprehensions are one of the coolest features of Python. This tutorial will walk through what they are, how they work, and several examples of how to use them.
title: Book - List Comprehensions
date: "2020-10-14T00:00:00Z"
lastmod: "2020-10-14T00:00:00Z"
draft: false  # Is this a draft? true/false
authors: []
tags: ['Data']


menu:
  book_list:
    parent: Book
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

![enter image description here](https://i2.wp.com/theautomatic.net/wp-content/uploads/2019/02/python-list-comprehensions.jpg?w=640)

List comprehensions are one of the coolest features of Python. This tutorial will walk through what they are, how they work, and several examples of how to use them.

## What are list comprehensions?
List comprehensions provide a compact way of defining a list by looping through the elements of another list or some other data structure. The result of a list comprehension is also a list. For instance, suppose we wanted to double every element in a list. Without list comprehensions, we could do something like the following:

```py
sample_list = [4, 5, 6, 7]
 
new_list = []
for index in range(len(sample_list)):
    new_list.append(sample_list[index] * 2)
 ```
This would create a new list (called new_list) where each element is double each element in sample_list. A simplified way to accomplish the same result is by using a list comprehension like this:

```py
new_list = [num * 2 for num in sample_list]
```
Above we define a list by enclosing brackets around a single-line for loop of sorts. Effectively, the above code is looping through each value in sample_list (where each value is called num). Prior to the for keyword, we code the operation we want to perform on each value, num, in the list – in this case that is just num * 2.

Another simple math operation might be something like this:
```py
new_list = [3 * num + 2 for num in sample_list]
```
## List comprehensions on lists of strings

List comprehensions can also be constructed on lists of strings.

```py
sample_strings = ["python", "is", "awesome!"]
 
upper_case = [s.upper() for s in sample_strings]
python list comprehension strings
```
![enter image description here](https://i0.wp.com/theautomatic.net/wp-content/uploads/2019/02/python-list-comprehension-strings.png?w=640)
```py
words = ["zen", "of", "python"]
 
first = [word[0] for word in words]
```
The above code will create a new list, words, where each element is the 0th character of the corresponding elements in the words list, “z”, “o”, and “p.”

## Reading in all the CSV files in a directory – with a list comprehension
Other ways we might use a list comprehension might include reading in a collection of data frames from CSV files. Suppose, for example, that we have a list of CSV files like below.

```py
import pandas as pd
 
csv_files = ["file1.csv", "file2.csv", "file3.csv", "file4.csv", "file5.csv"]
```
We could use a list comprehension to read in each of the files in one line of code:

```py
dfs = [pd.read_csv(csv_file) for csv_file in csv_files]
```
The above line of code applies the pd.read_csv function to each filename in csv_files – thus, reading in each CSV file’s data. This is then stored as the variable, dfs. Each element of dfs corresponds to a separate data frame for each respective CSV file.

## Looping and filtering in one step
One cool feature of list comprehensions is that they also allow you to provide conditionals in their definition – allowing you to not only loop over the elements of a list, but to also define a filtering mechanism as well. If that’s unclear, here’s an example:
```py
nums = [1, 3, 5, 7, 9, 11, 13, 15]
new_list = [num for num in nums if num < 7]
```
The above code will create a list called new_list containing the elements 1, 3, and 5 (all the elements less than 7 in the nums list).

We can also perform an operation on each element of a list, while implementing a filter.

```py
nums = [1, 3, 5, 7, 9, 11, 13, 15]
 
new_list = [num * 2 for num in nums if num < 7]
```
![enter image description here](https://i2.wp.com/theautomatic.net/wp-content/uploads/2019/02/filtering_list_comprehension.png?w=640)

This code tweaks what we did previously to loop over each element, num, in the nums list, but filtering out any elements that are less than 7 in the original list.

## If-else statements in list comprehensions
We can also do if-else statements like this:

```py
nums = [1, 3, 5, 7, 9, 11, 13, 15]
 
odd_even = ["even" if num % 2 == 0 else "odd" for num in nums]
```
Above, rather than filtering, we use an if-else statement within our list comprehension to perform a test on each element. In this case, we are checking whether or not each element is divisible by 2 (num % 2). If it is then that element gets mapped to “even” – otherwise it gets mapped to “odd.”

We can also chain together if-else statements. Note, the way we do this is a little different than the standard if / elif / else structure you may be used to in Python (with list comprehensions we don’t use the keyword elif).

```py
nums = [1, 3, 5, 7, 9, 11, 13, 15]
 
info = ["by 5" if num % 5 == 0 else "by 3" if num % 3 == 0 else "one" if num == 1 else "other" for num in nums]
```
Breaking this down, we see again that we’re looping through each num in nums. For each value, num, we perform a series of checks:
```py
If num % 5 == 0 then return “by 5”

Else If num % 3 == 0 then return “by 3”

Else If num == 1 then return “one”

Otherwise, return “other”
```
The result of this operation is below:

![python list comprehension if else if statement](https://i0.wp.com/theautomatic.net/wp-content/uploads/2019/02/python-list-comprehension-if-else-if-statement.png?w=640)

## Defining a list comprehension from a dictionary
We can also define a list comprehension by looping over the key-value pairs from a dictionary.

```py
mapping = {"a": 10, "b": 20, "c": 30, "d": 40, "e": 50, "f": 60, "g": 70, "h": 80}
 
reduced = [key for key,val in mapping.items() if val < 40]
```
The above code, after initializing a simple dictionary mapping the first eight letters to numbers, uses a list comprehension to filter the values of the dictionary – and to return the keys associated with applying that filter. Hence, the code above loops through each key-value pair in mapping and returns the keys corresponding the values that are less than 40 (val < 40).

Note: notice that we are using mapping.items in our list comprehension to loop over the key-value pairs of mapping. This is because mapping.items contains a collection of tuples, where each tuple contains a particular key-value pair.

![enter image description here](https://i1.wp.com/theautomatic.net/wp-content/uploads/2019/02/dictionary_items.png?w=640)

![enter image description here](https://i1.wp.com/theautomatic.net/wp-content/uploads/2019/02/python-list-comprehension-on-dictionary.png?w=640)
Other filtering options we might do above could be applied to the keys as well:

```py
# get the values associated with "a" and "b" keys only
[val for key,val in mapping.items() if key in ["a", "b"]]
```

> Reference :  http://theautomatic.net/tutorial-on-python-list-comprehensions/
