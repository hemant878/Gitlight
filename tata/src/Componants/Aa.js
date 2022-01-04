import React, { Component} from 'react';
import { FacebookProvider, Comments,Like  } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Like href="https://www.facebook.com/photo?fbid=460887928736973" />
      </FacebookProvider>
    );
  }
}