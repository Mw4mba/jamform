import smtplib, ssl




    


def sendMsg():
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = "t95527095@gmail.com"  # Enter your address
    receiver_email = "mwambaandy06@gmail.com"  # Enter receiver address
    password = "pqhnqcueoctscytr"#input("Type your password and press enter: ")
    message = """\
Subject: Hi there

This message is sent from Python."""

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)
    return 1