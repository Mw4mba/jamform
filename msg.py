import smtplib, ssl
import os

port = 465  # For SSL
smtp_server = "smtp.gmail.com"
sender_email = "t95527095@gmail.com"  # Enter your address
receiver_email = "mwambaandy06@gmail.com"  # Enter receiver address
password = os.environ["NEXT_PUBLIC_API_KEY"]#input("Type your password and press enter: ")
message = """\
Subject: Ne

This message is sent from Python."""


    
context = ssl.create_default_context()
with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)

def sendMsg(inp):
    message2 = f"""\
Subject: New Formsubmission
{inp}
."""
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message2)
    return 1