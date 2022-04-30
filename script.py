def fizz_buzz(loop_times):
    for i in range(1, loop_times + 1):
        if i % 3 == 0 and i % 5 == 0:
            print(f"FizzBuzz {i}")
        elif i % 3 == 0:
            print(f"Fizz {i}")
        elif i % 5 == 0:
            print(f"Buzz {i}")


fizz_buzz(100)
