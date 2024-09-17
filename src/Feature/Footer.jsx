import React from 'react'
 import BackToTopButton from '../Components/BackToTopButton';

const Footer = () => {
  return (
    <div>
      <footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div class="py-[30px] px-0 border-t border-slate-800">
                <div class="container relative text-center">
                    <div class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div class="lg:col-span-3 md:text-start text-center">
                            <a href="#" class="text-[22px] focus:outline-none">
                                <img src="assets/images/logo-light.png" class="mx-auto md:me-auto md:ms-0" alt=""/>
                            </a>
                        </div>

                        <div class="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p class="mb-0">© <span>{new Date().getFullYear()}</span> lompatkelas.com Design with by <a href="/" target="_blank" class="text-reset">Dev lompatkelas</a>.com</p>
                        </div>

                        <ul class="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            <li class="inline"><a href="https://1.envato.market/upcover" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="shopping-cart" class="size-4 align-middle" title="Buy Now"></i></a></li>
                            <li class="inline"><a href="https://dribbble.com/shreethemes" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="dribbble" class="size-4 align-middle" title="dribbble"></i></a></li>
                            <li class="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="linkedin" class="size-4 align-middle" title="Linkedin"></i></a></li>
                            <li class="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="facebook" class="size-4 align-middle" title="facebook"></i></a></li>
                            <li class="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="instagram" class="size-4 align-middle" title="instagram"></i></a></li>
                            <li class="inline"><a href="https://x.com/shreethemes" target="_blank" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="twitter" class="size-4 align-middle" title="twitter"></i></a></li>
                            <li class="inline"><a href="mailto:support@shreethemes.in" class="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><i data-feather="mail" class="size-4 align-middle" title="email"></i></a></li>
                        </ul> 
                    </div> 
                </div> 
            </div>
        </footer>

        <BackToTopButton/>



    </div>
  )
}

export default Footer
