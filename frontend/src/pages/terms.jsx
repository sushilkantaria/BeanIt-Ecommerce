import React from 'react';
import {Link} from 'react-router-dom';
import './terms.css'; // Import your terms.css file
import './footer.css'; // Import your footer.css file
import arrow from '../images/up-arrow.jpg' 

function TermsAndConditions() {
    return (
        <div className='inplaceofBody'>
            <hr />
            <div className="terms-of-use-heading">
                <p>Terms of use</p>
            </div>

            <div>
                <div>
                    <p className="coffee-comes-from-class">
                        Bean It is committed to maintaining trust with users of our Website. The terms below govern your use of the Website.
                    </p>
                </div>
            </div>

            <div className="terms-of-use-headings">
                <p>1. Acceptable use</p>
            </div>

            <div>
                <div>
                    <p className="coffee-comes-from-class">
                        Please feel free to explore our Website and, where available, contribute material to it, such as questions, posts and multimedia content (e.g. pictures, videos).
                    </p>

                    <p className="coffee-comes-from-class">
                        However, use of the Website and materials posted to it should not be illegal or offensive in any way. You should be mindful not to:
                    </p>

                    <p>
                        <ol type="a" className="info-class">
                            <li> breach another person’s right to privacy; </li>
                            <li> infringe any intellectual property rights; </li>
                            <li> make statements that are defamatory (including towards Nestlé), relate to pornography, are of a racist or xenophobic nature, promote hatred or incite to violence or disorder; </li>
                            <li> upload files that contain viruses or may lead to security issues; </li>
                            <li> otherwise jeopardize the integrity of the Website.
                            </li>
                        </ol>
                    </p>

                    <br />

                    <p className="coffee-comes-from-class">
                        Please note that Bean It may remove any content from the Website that it believes maybe illegal or offensive.
                    </p>

                    <div className="terms-of-use-headings">
                        <p>2. Data protection</p>
                    </div>

                    <p className="coffee-comes-from-class">
                        Our <Link to="/priv_policy">Privacy Notice</Link> applies to any personal data or material shared on this Website.
                    </p>

                    <div className="terms-of-use-headings">
                        <p>3. Intellectual property</p>
                    </div>

                    <div className="sub-headings">
                        <p>3.1. Content provided by Bean It.</p>
                    </div>

                    <p className="sub-info">    
                        All intellectual property rights, including copyright and trademarks, in materials published by or on behalf of Bean It on the Website (e.g. text and images) are not completely owned by Bean It or its licensors.
                    </p>
                    
                    <p className="sub-info">    
                        You may reproduce extracts of the Website for your own private use (i.e. non-commercial use) provided that you keep intact and respect all intellectual property rights, including any copyright notice which may appear on such content.
                    </p>

                    <div className="sub-headings">
                        <p>3.2. Content provided by You</p>
                    </div>

                    <p className="sub-info">    
                        You represent to Bean It that you are either the author of the content that you contribute to this Website, or that you have the rights (ie: have been given permission by the rights holder) and are able to contribute such content (e.g. pictures, videos, music) to the Website.
                    </p>
                    
                    <p className="sub-info">    
                        You agree that such content will be treated as non-confidential and you grant Nestlé a royalty free, perpetual, worldwide licence to use (including to disclose, reproduce, transmit, publish, or broadcast) the content you provide for purposes relating to its business.
                    </p>

                    <p className="sub-info">    
                        Please note that Bean It is free to decide whether or not to use this content and that Nestlé may already have developed similar content or have obtained such content from other sources, in which case all intellectual property rights in this content remains with Nestlé and its licensors.
                    </p>

                    <div className="sub-headings">
                        <p>3.3. Rules governing consumer ratings and review service</p>
                    </div>

                    <p className="sub-info">    
                        In addition to these terms the following additional rules apply for ratings and review services. In order to submit any content to any rating and review service available on this Website (such as text, photo, video, likeness or other material or information), you must be 18 years of age or older, or have received the consent of the person/s exercising parental authority. If you have received prior payment or promise of payment in return for your proposed submission; or if you have received an incentive such as free product, discounts, gifts, sweepstakes entries you will disclose it in your submission. If you are a Bean It employee or work for a company or agency hired by Bean It, you have disclosed that relationship.
                    </p>
                    
                    <p className="sub-info">    
                        All content that you submit is accurate and is based upon your actual experience with the product being reviewed. It shall not include any information that references other websites, addresses, email addresses, contact information or phone numbers. You are responsible for the content of your submission, not Bean It.
                    </p>

                    <div className="terms-of-use-headings">
                        <p>4. Liability</p>
                    </div>

                    <p className="coffee-comes-from-class">    
                        While Bean It uses all reasonable efforts to ensure the accuracy of materials on our Website and to avoid disruptions, we are not responsible for inaccurate information, disruptions, discontinuance or other events which may cause you damage, either direct (e.g. computer failure) or indirect (e.g. loss of profit). Any reliance upon materials on this Website shall be at your own risk.
                    </p>

                    <p className="coffee-comes-from-class">    
                        This Website may contain links to websites outside of Nestlé. Nestlé has no control over such third party websites, does not necessarily endorse them and accepts no responsibility for them, including as to their content, accuracy or function. As a result, we invite you to carefully review the legal notices of such third party websites, including keeping yourself informed of any changes to them.
                    </p>

                    <p className="coffee-comes-from-class">    
                        You may operate a third party website and wish to link to this Website. In this case, Bean it does not object to such linking provided that you do not suggest in any way that you are affiliated with or endorsed by Bean It. You must not use framing or similar practices, and must ensure that the link to the Website opens in a new window.
                    </p>

                    <div className="terms-of-use-headings">
                        <p>5. Changes</p>
                    </div>

                    <p className="coffee-comes-from-class">    
                        Bean It reserves the right to make changes to these terms of use. Please refer to this page from time to time to review these terms of use and any new information.
                    </p>

                    <div className="terms-of-use-headings">
                        <p>6. Governing law and jurisdiction</p>
                    </div>

                    <p className="coffee-comes-from-class">    
                        You and Bean It agree that all claims or disputes arising out of or relating to this Website shall be governed by and construed in accordance with the laws of India.  The parties agree to submit all such claims or disputes to the exclusive jurisdiction of the courts located in India.
                    </p>           
                </div>
            </div> 

            <div className="forbuttons">
                {/* <button className="button back" onClick={() => window.location.href = '/'}>Back</button> */}
                <button className="button home" onClick={() => window.location.href = '/'}>Home</button>
            </div>

            <div className="scroll-to-top">
                <button id="scrollButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={arrow} alt="" />
                    {/* <i className="fas fa-chevron-up"></i> */}
                </button>
            </div>

        </div>
    );
}

export default TermsAndConditions;
