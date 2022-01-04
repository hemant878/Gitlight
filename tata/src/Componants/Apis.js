import React from 'react'
import TelegramEmbed from 'react-telegram-embed'
import { FacebookProvider, EmbeddedPost, Like } from 'react-facebook';
import Embed from 'react-embed';

function Apis() {
    return (
        <div>

            <FacebookProvider appId="123456789">
        <EmbeddedPost href="https://www.facebook.com/photo?fbid=460887928736973" width='330px'/>
      </FacebookProvider>
            
<TelegramEmbed src='https://t.me/FEGchat/4268175' />
<TelegramEmbed src='https://t.me/iPapkorn/118' />




https://t.me/c/1319000104/5335
        </div>
    )
}

export default Apis
