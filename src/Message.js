import React, { forwardRef } from 'react'
import { Card, CardContent,Typography } from '@material-ui/core';
import './Message.css';


const Message= forwardRef(({ message, username },ref) => {
    //Determine if user islogged in or not
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && "message__user"}`}>
        <Card className={ isUser ? "message__userCard" : "message__guest"}>
            <CardContent>
                <Typography
                    color="white"
                    component="h2"
                    variant="h5"
                >
                    {!isUser && `${message.username || 'Unknown user '}: `} {message.message}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
})

export default Message
