import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cfwq4qg', 'template_pyes2sc', form.current, 'A4SVt-MTqUVf-OyoA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-1/2 lg:p-20 p-5 backdrop-contrast-50 mx-auto'>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="user_name" className=" w-full input input-bordered" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="user_email" className=" w-full input input-bordered" required />

                </div>
                <div>
                <label className="label">
            <span className="label-text font-semibold">Message</span>
          </label>
          <textarea className="textarea textarea-bordered w-full py-10" name="message" required  placeholder="message"></textarea>
                   
                </div>
                <input type="submit" value="Send" className='btn w-full drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] border-none mt-10 bg-emerald-500  text-white hover:bg-emerald-700' />
            </form>
        </div>
    );
};

export default Contact;