from dataclasses import dataclass
# from http import server, client


class CatwoCommandParser:
    def __init__(self):
        pass

    def split_words(self, message):
        lines = message.splitlines()
        words = []
        for line in lines:
            words.extend([word for word in line.split() if not word.isspace()])
        return words

    def interpret_commands(self, message):
        if isinstance(message, str):
            words = self.split_words(message)
        else:
            words = message
        # TODO: Actually do something with these words


class CatwoMessage:
    @dataclass(frozen=True)
    class DataKeys:
        key_action = "action"
        key_params = "params"

    def __init__(self, content="", sender="", commands={}):
        self.content = content
        self.sender = sender
        self.commands = commands

    def execute_commands(self):
        for command in self.commands.values():
            if isinstance(command, dict):
                pass
            elif callable(command):
                command()


# This is just for testing the ability to split a string into words. Put a # character at the beginning of the next line to disable it.
print(CatwoCommandParser().split_words("one two three \n\n              \t\t\n\t\n\n four"))
