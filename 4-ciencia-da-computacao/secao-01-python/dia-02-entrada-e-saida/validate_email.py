def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError('Username should start with a letter')
    
    while email[index] != '@' and index < len(email):
        if (
            not email[index].isalpha() 
            and not email[index].isdigit() 
            and email[index] not in ("_", "-")
        ):
            raise ValueError('Username should only contain letters, digits, dashes or underscores')
        index += 1
    
    index += 1  # skip @
    while email[index] != '.' and index < len(email):
        if not email[index].isalpha() and not email[index].isdigit():
            raise ValueError('Website should only contain letters and digits')
        index += 1

    index += 1  # skip .
    if not len(email) - index <= 3:
        raise ValueError('Extension maximum length is 3"')

    return None


# validate_email("aa@nomewebsite.extt")