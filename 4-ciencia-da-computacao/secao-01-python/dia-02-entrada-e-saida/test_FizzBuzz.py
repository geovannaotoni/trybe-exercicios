# import pytest
from fizzBuzz import fizzBuzz


def test_return_fizz_when_a_number_in_the_list_is_divisible_by_3():
    assert fizzBuzz([3]) == ["Fizz"]


def test_return_buzz_when_a_number_in_the_list_is_divisible_by_5():
    assert fizzBuzz([5]) == ["Buzz"]


def test_return_fizzBuzz_when_a_number_in_the_list_is_divisible_by_3_and_5():
    assert fizzBuzz([15]) == ["FizzBuzz"]
