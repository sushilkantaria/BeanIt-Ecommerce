import React from 'react';
import './priv_policy.css'; // Import your priv_policy.css file
import './footer.css'; // Import your footer.css file
import arrow from '../images/up-arrow.jpg' 


function PrivacyPolicy() {
    return (
        <div className='priv-body'>
            
<hr />
            <div className="terms-of-use-heading">
                <p>Our privacy notice and you</p>
            </div>

            <div className="sub-headings">
                <p style={{fontWeight: '200'}}>Privacy matters.</p>
            </div>

            <div>
                <p className="coffee-comes-from-class">
                    We know that data privacy is a top issue today, and we want you to enjoy your interaction with us whilst knowing that we value your Personal Data and that we protect it.
                </p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    Here you will find an overview of how we process your Personal Data, the purposes for which we process it, and how you benefit. You’ll also see what your rights are and how you can contact us.
                </p>
            </div>

            <div className="terms-of-use-heading">
                <p>Updates to this Privacy Notice</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    As business and technology evolves, we might need to change this Privacy Notice. We encourage you to regularly review this Privacy Notice to make sure you are up-to-date with how Bean it is using your Personal Data.
                </p>
            </div>

            <div className="terms-of-use-heading">
                <p>Aged under 13?</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    If you’re under the age of 13 we kindly ask you to wait to be a bit older to interact with us or ask a parent or guardian to contact us! We can’t collect and use your Personal Data without their agreement.
                </p>
            </div>

            <div className="terms-of-use-heading">
                <p>What data do we collect?</p>
            </div>

            <ul className="info-class">
                <li> The Personal Data that you give to us, e.g., when you create an account, make a purchase, login on our websites, contact us, provide feedback, fill in a form, send us an email , call us, share content on a Bean it site or publicly share information about Bean it on social media. </li>

                <li> The data that we create e.g., when you make a purchase, and data that is collected automatically when you access one of our websites or apps, e.g., IP address, device ID, what browser you use or how you interact with Bean it sites before or after having a Bean it account. You can see our Cookies notice for more information on these technologies. </li>

                <li> Data collected from other legitimate sources such as Nestlé promotional partners, from public sources, data from your interaction with our advertising, or Personal Data that is part of your profile on a social network and that you have made available to us. </li>
            </ul>

            <div className="terms-of-use-heading">
                <p>Why do we process your Personal Data?</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    We process your Personal Data, including any sensitive personal data that you have provided to us with your consent, to communicate with you, fulfil your purchase orders, answer your queries and provide you with communications about Bean it and our products. We also process your Personal Data in order to help us comply with the law, to sell or transfer any relevant part of our business, to manage our systems and finances, to conduct investigations and to exercise legal rights. We combine your Personal Data from all sources so that we can understand you better to improve and personalise your experience when interacting with us.
                </p>
            </div>

            <div className="terms-of-use-heading">
                <p>Who can access your Personal Data and why?</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    We limit the disclosure of your Personal Data to others, however we do need to disclose your Personal Data in certain instances and mainly to the following recipients:
                </p>
            </div>

            <ul className="info-class">
                <li> Companies within the Nestlé Group, where required for our legitimate interests or with your consent; </li>

                <li> Third parties engaged by us to provide services such as administering Nestlé websites, applications and services (e.g. features, programs, and promotions) available to you, subject to appropriate protections; </li>

                <li>Credit reporting agencies/debt collectors, where permitted by the law and if we need to verify your creditworthiness (e.g. if you choose to order with invoice) or collect outstanding invoices; and </li>

                <li>Relevant public agencies and authorities, if required to do so by law or a legitimate business interest. </li>
            </ul>

            <div className="terms-of-use-heading">
                <p>Transfer of your personal data?</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    We may process your Personal Data outside of the country in which you are based (including countries outside the European Economic Area) for the purposes set out in this notice. When we transfer your Personal Data to other countries, we take reasonable steps to ensure that applicable laws are being followed.
                </p>
            </div>

            <div className="terms-of-use-heading">
                <p>What are your rights over your Personal Data?</p>
            </div>

            

            <div>
                <p className="coffee-comes-from-class" >
                    You can make a complaint.
                </p>
            </div>

            <ul className="info-class">
                <li> If you are concerned about a possible interference with your privacy or misuse of your Personal Data by us you can contact us to make a complaint. We hope we can satisfy queries you may have about the way we process your Personal Data. However, if you have unresolved concerns you also have the right to complain to competent data protection authorities.  </li>
            </ul>

            <div className="terms-of-use-heading">
                <p>Data security and retention</p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    We use a variety of measures to keep your Personal Data confidential and secure, including restricting access to your Personal Data on a need to know basis and following appropriate security standards to protect your data.
                </p>
            </div>

            <div>
                <p className="coffee-comes-from-class" >
                    We take every reasonable step to ensure that your Personal Data is only processed for the minimum period necessary in connection with: (i) the purposes set out in this Privacy Notice; (ii) any additional purposes notified to you at or before the time of collection of the relevant Personal Data or commencement of the relevant processing; or (iii) as required or permitted by applicable law; and thereafter, for the duration of any applicable limitation period. In short, once your Personal Data is no longer required, we will destroy or delete it in a secure manner.
                </p>
            </div>

            {/* Back and Home buttons */}
            <div className="forbuttons">
                <button className="button home" onClick={() => window.location.href = '/'}>Home</button>
            </div>

            <div className="scroll-to-top">
                <button id="scrollButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={arrow} alt="" />
                    {/* <i className="fas fa-chevron-up"></i> */}
                </button>
            </div>

            {/* Footer */}
            <footer>
                
            </footer>
        </div>
    );
}

export default PrivacyPolicy;
