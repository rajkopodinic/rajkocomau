//import emailjs from 'emailjs-com'
import {FormSubmitted} from '../lib/Functions';

const Form = () => {

    var date = new Date();

    const submitForm = event => {
        event.preventDefault();

        //Data Layer Push
        //<FormSubmitted />;
        FormSubmitted();

        // Email Submission
        // (function(){
        //     emailjs.init("user_6PQO0IuOpfoU981T1csLv");
        //  })();

        // emailjs.sendForm('service_1ocuu1p', 'template_6b45p1q', '#form')
        // .then(function(response) {
        //     console.log('SUCCESS!', response.status, response.text);
        // }, function(error) {
        //     console.log('FAILED...', error);
        // });

        // Google Sheet Submission
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbwsDzjbOaCdMk_ShY5Rsg8LsUI6EFzg29uV8rbWEIdaxOXzMJvBI3Z5YpKx8ycYWcCN/exec';
        // var form = document.getElementById('form');
        // var formStatus = document.getElementById('formStatus');
        // var hp = document.getElementById('honeypot').value;

        // if ( !hp ) {
        //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //         .then(response => console.log('Success!', response))
        //         .then(form.reset())
        //         .catch(error => console.error('Error!', error.message));

        //     formStatus.insertAdjacentHTML('beforeend', `<p class="success-message">Your form has been successfully submitted.<br>Thank you!</p>`);
        // }
    }
    

    return (
        <div id='formStatus'>
            <form onSubmit={submitForm} id='form' className="form shadow">
                <div>
                    <input id='honeypot' type="hidden" name="Honeypot"/>
                </div>

                <div>
                    <input type="hidden" name="Timestamp" value={date}/>
                </div>

                <div>
                    <label className='form-label'>First Name</label>
                    <div></div>
                    <input className='form-input' type="text" name="First Name"/>
                </div>

                <div>
                    <label className='form-label'>Last Name</label>
                    <div></div>
                    <input className='form-input' type="text" name="Last Name"/>
                </div>

                <div>
                    <label className='form-label'>Email</label>
                    <div></div>
                    <input className='form-input' type="text" name="Email"/>
                </div>

                <div>
                    <label className='form-label'>Mobile</label>
                    <div></div>
                    <input className='form-input' type="text" name="Mobile"/>
                </div>

                <div>
                    <label className='form-label'>Message</label>
                    <div></div>
                    <input className='form-input' type="text" name="Message"/>
                </div>

                <div>
                    <button className='primary-button-form' type="submit" id="submit-form">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default Form;