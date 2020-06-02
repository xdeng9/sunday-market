import React, { Component } from 'react';
import {FooterBox,CopyRight,A,Story} from './style'
class Footer extends Component {
    render() {
        return (
            <FooterBox> 
             <Story>
                <h4>A Note From the Developers</h4>
                Thank you so much for taking the time to look at our work. Each of us have put a lot of time into this project, and we would love to answer any questions you might have about them. Feel free to contact and connect with us on LinkedIn and check out our other projects!
            </Story>
               
            <CopyRight>
                    CopyRight <i className="far fa-copyright"></i> A Team Project From <A href='https://www.linkedin.com/in/alvin-zhao-8656b815a/'>Alvin Zhao</A>,
                    <A href='https://www.linkedin.com/in/eric-hsieh-1b8b961a9/'> Eric Hsieh</A>, <A href='https://www.linkedin.com/in/javier-castro-8620741aa/'>Javier Castro</A>, <A href='https://www.linkedin.com/in/xideng/'>Joseph Deng</A>
            </CopyRight>
            </FooterBox>
        );
    }
}

export default Footer;