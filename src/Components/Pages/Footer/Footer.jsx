
const Footer = () => {

    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    {/* like Blood */}
                    <div className="svgFIle flex justify-around items-baseline">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 6.44772 20 7V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V17C14 16.4477 13.5523 16 13 16C12.4477 16 12 16.4477 12 17V21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21V17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V7C6 6.44772 5.55228 6 5 6C4.44772 6 4 5.55228 4 5V3C4 2.44772 4.44772 2 5 2H3C2.44772 2 2 2.44772 2 3ZM10 8.5C10 7.11929 11.1193 6 12.5 6C13.8807 6 15 7.11929 15 8.5C15 9.88071 13.8807 11 12.5 11C11.1193 11 10 9.88071 10 8.5ZM12.5 8C12.2239 8 12 8.22386 12 8.5C12 8.77614 12.2239 9 12.5 9C12.7761 9 13 8.77614 13 8.5C13 8.22386 12.7761 8 12.5 8Z"
                            fill="#DB3737"
                        />
                    </svg>


                    {/* first aid box from chat gpt */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                    >
                        <rect x="3" y="6" width="18" height="12" rx="2" fill="#4CAF50" />
                        <path
                            d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V4ZM2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V4Z"
                            fill="#4CAF50"
                        />
                        <rect x="7" y="9" width="2" height="7" rx="1" fill="white" />
                        <rect x="15" y="9" width="2" height="7" rx="1" fill="white" />
                        <rect x="9" y="5" width="6" height="2" rx="1" fill="white" />
                    </svg>
                    </div>

                <p>MCMS<br />Medical Camp Management System</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>
            <div className="p-4 footer-center bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right Medical Camp Management System</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;