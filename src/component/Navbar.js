import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import DropShop from './DropShop';
import NavbarDropCollections from './NavbarDropCollections';

export default function Navbar() {
  return (
    <>
      <div className='navbar_notification'>
        <h4>Free U.S. Shipping & Returns $150+ | Free Intl Shipping $200+</h4>
      </div>
      <div className='navbar'>
        <div className='navbar__header'>
          <Link to='/'>
            <svg
              className='navbar__logo'
              viewBox='0 0 195 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M82.848 46C79.376 46 76.84 45.2 75.24 43.6C73.64 42 72.84 39.464 72.84 35.992V25.072C72.84 21.568 73.632 19.024 75.216 17.44C76.816 15.856 79.344 15.064 82.8 15.064H88.608C91.552 15.064 93.744 15.68 95.184 16.912C96.624 18.128 97.416 20.088 97.56 22.792C97.608 23.224 97.52 23.552 97.296 23.776C97.088 24 96.776 24.112 96.36 24.112C95.56 24.112 95.12 23.688 95.04 22.84C94.928 20.856 94.384 19.488 93.408 18.736C92.432 17.968 90.832 17.584 88.608 17.584H82.8C80.96 17.584 79.496 17.824 78.408 18.304C77.32 18.768 76.536 19.552 76.056 20.656C75.592 21.744 75.36 23.216 75.36 25.072V35.992C75.36 37.848 75.6 39.32 76.08 40.408C76.56 41.496 77.344 42.28 78.432 42.76C79.52 43.24 80.992 43.48 82.848 43.48H88.608C90.832 43.48 92.432 43.104 93.408 42.352C94.384 41.584 94.928 40.208 95.04 38.224C95.12 37.376 95.56 36.952 96.36 36.952C96.776 36.952 97.088 37.072 97.296 37.312C97.52 37.536 97.608 37.856 97.56 38.272C97.416 40.976 96.624 42.944 95.184 44.176C93.744 45.392 91.552 46 88.608 46H82.848ZM115.178 46C111.706 46 109.17 45.2 107.57 43.6C105.97 42 105.17 39.464 105.17 35.992V16.336C105.17 15.952 105.282 15.648 105.506 15.424C105.746 15.184 106.058 15.064 106.442 15.064C106.826 15.064 107.13 15.184 107.354 15.424C107.578 15.648 107.69 15.952 107.69 16.336V35.992C107.69 37.848 107.93 39.32 108.41 40.408C108.89 41.496 109.674 42.28 110.762 42.76C111.85 43.24 113.322 43.48 115.178 43.48H120.938C122.778 43.48 124.242 43.24 125.33 42.76C126.418 42.28 127.202 41.496 127.682 40.408C128.162 39.32 128.402 37.848 128.402 35.992V16.336C128.402 15.952 128.514 15.648 128.738 15.424C128.978 15.184 129.29 15.064 129.674 15.064C130.058 15.064 130.362 15.184 130.586 15.424C130.81 15.648 130.922 15.952 130.922 16.336V35.992C130.922 39.464 130.122 42 128.522 43.6C126.938 45.2 124.41 46 120.938 46H115.178ZM148.82 46.024C148.436 46.024 148.124 45.912 147.884 45.688C147.66 45.464 147.548 45.16 147.548 44.776V17.56H137.348C136.964 17.56 136.652 17.448 136.412 17.224C136.188 17 136.076 16.696 136.076 16.312C136.076 15.928 136.188 15.624 136.412 15.4C136.652 15.16 136.964 15.04 137.348 15.04H160.292C160.676 15.04 160.98 15.16 161.204 15.4C161.428 15.624 161.54 15.928 161.54 16.312C161.54 16.696 161.428 17 161.204 17.224C160.98 17.448 160.676 17.56 160.292 17.56H150.068V44.776C150.068 45.144 149.948 45.448 149.708 45.688C149.484 45.912 149.188 46.024 148.82 46.024ZM174.854 45.952C171.99 45.952 169.862 45.32 168.47 44.056C167.094 42.776 166.358 40.768 166.262 38.032C166.246 37.648 166.35 37.344 166.574 37.12C166.814 36.88 167.126 36.76 167.51 36.76C167.894 36.76 168.198 36.872 168.422 37.096C168.646 37.32 168.774 37.624 168.806 38.008C168.87 40.024 169.35 41.432 170.246 42.232C171.142 43.032 172.678 43.432 174.854 43.432H181.766C184.038 43.432 185.614 42.992 186.494 42.112C187.39 41.216 187.838 39.648 187.838 37.408C187.838 35.136 187.39 33.56 186.494 32.68C185.614 31.784 184.038 31.336 181.766 31.336H175.19C172.374 31.336 170.31 30.68 168.998 29.368C167.686 28.056 167.03 26 167.03 23.2C167.03 20.4 167.678 18.344 168.974 17.032C170.286 15.72 172.342 15.064 175.142 15.064H181.862C184.55 15.064 186.542 15.664 187.838 16.864C189.15 18.064 189.854 19.952 189.95 22.528C189.982 22.912 189.878 23.224 189.638 23.464C189.414 23.688 189.102 23.8 188.702 23.8C188.334 23.8 188.038 23.688 187.814 23.464C187.59 23.24 187.462 22.936 187.43 22.552C187.366 20.712 186.918 19.424 186.086 18.688C185.254 17.952 183.846 17.584 181.862 17.584H175.142C173.046 17.584 171.59 18 170.774 18.832C169.958 19.648 169.55 21.104 169.55 23.2C169.55 25.296 169.958 26.76 170.774 27.592C171.606 28.408 173.078 28.816 175.19 28.816H181.766C184.742 28.816 186.918 29.512 188.294 30.904C189.67 32.28 190.358 34.448 190.358 37.408C190.358 40.368 189.67 42.536 188.294 43.912C186.918 45.272 184.742 45.952 181.766 45.952H174.854Z'
                fill='black'
              />
              <path
                d='M75.24 43.6L76.3007 42.5393L76.3007 42.5393L75.24 43.6ZM75.216 17.44L74.1607 16.374L74.1553 16.3793L75.216 17.44ZM95.184 16.912L94.2088 18.0518L94.2162 18.058L95.184 16.912ZM97.56 22.792L96.0621 22.8718L96.0644 22.9148L96.0692 22.9576L97.56 22.792ZM97.296 23.776L96.2353 22.7153L96.2157 22.735L96.1968 22.7553L97.296 23.776ZM95.04 22.84L93.5424 22.9245L93.544 22.9528L93.5466 22.9809L95.04 22.84ZM93.408 18.736L92.4804 19.9148L92.4864 19.9195L92.4925 19.9242L93.408 18.736ZM78.408 18.304L78.9964 19.6838L79.005 19.6801L79.0135 19.6764L78.408 18.304ZM76.056 20.656L74.6804 20.0579L74.6762 20.0676L76.056 20.656ZM76.08 40.408L74.7076 41.0135L74.7076 41.0135L76.08 40.408ZM78.432 42.76L77.8265 44.1324L77.8265 44.1324L78.432 42.76ZM93.408 42.352L94.3235 43.5402L94.3296 43.5355L94.3356 43.5308L93.408 42.352ZM95.04 38.224L93.5466 38.0831L93.544 38.1112L93.5424 38.1395L95.04 38.224ZM97.296 37.312L96.1625 38.2944L96.1975 38.3348L96.2353 38.3727L97.296 37.312ZM97.56 38.272L96.0699 38.1001L96.0646 38.146L96.0621 38.1922L97.56 38.272ZM95.184 44.176L96.1518 45.3221L96.1591 45.3158L95.184 44.176ZM82.848 44.5C79.5656 44.5 77.5002 43.7389 76.3007 42.5393L74.1793 44.6607C76.1798 46.6611 79.1864 47.5 82.848 47.5V44.5ZM76.3007 42.5393C75.1011 41.3398 74.34 39.2744 74.34 35.992H71.34C71.34 39.6536 72.1789 42.6602 74.1793 44.6607L76.3007 42.5393ZM74.34 35.992V25.072H71.34V35.992H74.34ZM74.34 25.072C74.34 21.7478 75.0976 19.6797 76.2767 18.5007L74.1553 16.3793C72.1664 18.3683 71.34 21.3882 71.34 25.072H74.34ZM76.2713 18.506C77.4716 17.3177 79.5325 16.564 82.8 16.564V13.564C79.1555 13.564 76.1604 14.3943 74.1607 16.374L76.2713 18.506ZM82.8 16.564H88.608V13.564H82.8V16.564ZM88.608 16.564C91.383 16.564 93.1559 17.1509 94.2089 18.0518L96.1591 15.7722C94.3321 14.2091 91.721 13.564 88.608 13.564V16.564ZM94.2162 18.058C95.2228 18.9081 95.9304 20.3979 96.0621 22.8718L99.0579 22.7122C98.9016 19.7781 98.0252 17.3479 96.1518 15.766L94.2162 18.058ZM96.0692 22.9576C96.0781 23.0376 96.0653 23.0326 96.0812 22.9733C96.0897 22.9419 96.1052 22.8989 96.1327 22.8504C96.1604 22.8014 96.1953 22.7554 96.2353 22.7153L98.3567 24.8367C99.0116 24.1817 99.1293 23.3325 99.0508 22.6264L96.0692 22.9576ZM96.1968 22.7553C96.2306 22.7189 96.2682 22.6878 96.3064 22.6631C96.3443 22.6387 96.3769 22.6242 96.3992 22.6162C96.4413 22.6011 96.4374 22.612 96.36 22.612V25.612C97.0369 25.612 97.8122 25.4246 98.3952 24.7967L96.1968 22.7553ZM96.36 22.612C96.2899 22.612 96.2814 22.6025 96.3128 22.6132C96.3503 22.626 96.4115 22.6567 96.4708 22.7139C96.5288 22.7697 96.5518 22.8188 96.556 22.8289C96.5582 22.8343 96.5427 22.7981 96.5334 22.6991L93.5466 22.9809C93.6071 23.6221 93.8251 24.3305 94.3892 24.8741C94.9669 25.4308 95.6959 25.612 96.36 25.612V22.612ZM96.5376 22.7555C96.4158 20.5981 95.8087 18.6921 94.3235 17.5478L92.4925 19.9242C92.9593 20.2839 93.4402 21.1139 93.5424 22.9245L96.5376 22.7555ZM94.3356 17.5572C92.9557 16.4714 90.9326 16.084 88.608 16.084V19.084C90.7314 19.084 91.9083 19.4646 92.4804 19.9148L94.3356 17.5572ZM88.608 16.084H82.8V19.084H88.608V16.084ZM82.8 16.084C80.8539 16.084 79.1568 16.3341 77.8025 16.9316L79.0135 19.6764C79.8352 19.3139 81.0661 19.084 82.8 19.084V16.084ZM77.8196 16.9242C76.372 17.5416 75.3102 18.6093 74.6804 20.0579L77.4316 21.2541C77.7618 20.4947 78.268 19.9944 78.9964 19.6838L77.8196 16.9242ZM74.6762 20.0676C74.1007 21.4171 73.86 23.1163 73.86 25.072H76.86C76.86 23.3157 77.0833 22.0709 77.4358 21.2444L74.6762 20.0676ZM73.86 25.072V35.992H76.86V25.072H73.86ZM73.86 35.992C73.86 37.9519 74.1096 39.6579 74.7076 41.0135L77.4524 39.8025C77.0904 38.9821 76.86 37.7441 76.86 35.992H73.86ZM74.7076 41.0135C75.3387 42.4438 76.3962 43.5013 77.8265 44.1324L79.0375 41.3876C78.2918 41.0587 77.7813 40.5482 77.4524 39.8025L74.7076 41.0135ZM77.8265 44.1324C79.1821 44.7304 80.8881 44.98 82.848 44.98V41.98C81.0959 41.98 79.8579 41.7496 79.0375 41.3876L77.8265 44.1324ZM82.848 44.98H88.608V41.98H82.848V44.98ZM88.608 44.98C90.9283 44.98 92.9456 44.6019 94.3235 43.5402L92.4925 41.1638C91.9184 41.6061 90.7357 41.98 88.608 41.98V44.98ZM94.3356 43.5308C95.8078 42.3723 96.4156 40.4692 96.5376 38.3085L93.5424 38.1395C93.4404 39.9468 92.9602 40.7957 92.4804 41.1732L94.3356 43.5308ZM96.5334 38.3649C96.5427 38.2659 96.5582 38.2297 96.556 38.2351C96.5518 38.2452 96.5288 38.2943 96.4708 38.3501C96.4115 38.4073 96.3503 38.438 96.3128 38.4508C96.2814 38.4615 96.2899 38.452 96.36 38.452V35.452C95.6959 35.452 94.9669 35.6332 94.3892 36.1899C93.8251 36.7335 93.6071 37.4419 93.5466 38.0831L96.5334 38.3649ZM96.36 38.452C96.4273 38.452 96.4197 38.4621 96.3675 38.442C96.3405 38.4316 96.3052 38.4145 96.2667 38.3878C96.2278 38.3609 96.1925 38.329 96.1625 38.2944L98.4295 36.3296C97.8545 35.6661 97.0676 35.452 96.36 35.452V38.452ZM96.2353 38.3727C96.1986 38.3359 96.1649 38.2924 96.1373 38.2443C96.1099 38.1965 96.0932 38.1525 96.0837 38.1177C96.0653 38.0509 96.0774 38.0349 96.0699 38.1001L99.0501 38.4439C99.1324 37.7308 99.0022 36.8968 98.3567 36.2513L96.2353 38.3727ZM96.0621 38.1922C95.9305 40.6647 95.2231 42.1685 94.2089 43.0362L96.1591 45.3158C98.0249 43.7195 98.9015 41.2873 99.0579 38.3518L96.0621 38.1922ZM94.2162 43.03C93.1628 43.9195 91.3867 44.5 88.608 44.5V47.5C91.7173 47.5 94.3252 46.8645 96.1518 45.322L94.2162 43.03ZM88.608 44.5H82.848V47.5H88.608V44.5ZM107.57 43.6L108.631 42.5393L108.631 42.5393L107.57 43.6ZM105.506 15.424L106.567 16.4847L106.567 16.4847L105.506 15.424ZM107.354 15.424L106.257 16.4475L106.275 16.4664L106.293 16.4847L107.354 15.424ZM108.41 40.408L107.037 41.0135L107.037 41.0135L108.41 40.408ZM110.762 42.76L111.367 41.3876L111.367 41.3876L110.762 42.76ZM125.33 42.76L125.935 44.1324L125.935 44.1324L125.33 42.76ZM127.682 40.408L126.309 39.8025L126.309 39.8025L127.682 40.408ZM130.586 15.424L129.489 16.4475L129.507 16.4664L129.525 16.4847L130.586 15.424ZM128.522 43.6L127.461 42.5393L127.456 42.5447L128.522 43.6ZM115.178 44.5C111.896 44.5 109.83 43.7389 108.631 42.5393L106.509 44.6607C108.51 46.6611 111.516 47.5 115.178 47.5V44.5ZM108.631 42.5393C107.431 41.3398 106.67 39.2744 106.67 35.992H103.67C103.67 39.6536 104.509 42.6602 106.509 44.6607L108.631 42.5393ZM106.67 35.992V16.336H103.67V35.992H106.67ZM106.67 16.336C106.67 16.2889 106.677 16.2969 106.661 16.3386C106.654 16.3594 106.642 16.3849 106.624 16.4123C106.607 16.4398 106.587 16.4642 106.567 16.4847L104.445 14.3633C103.882 14.9265 103.67 15.6442 103.67 16.336H106.67ZM106.567 16.4847C106.555 16.4959 106.539 16.5095 106.519 16.5229C106.498 16.5364 106.477 16.5467 106.458 16.554C106.419 16.5692 106.407 16.564 106.442 16.564V13.564C105.717 13.564 105.004 13.8042 104.445 14.3633L106.567 16.4847ZM106.442 16.564C106.478 16.564 106.458 16.5694 106.407 16.5492C106.351 16.527 106.297 16.4896 106.257 16.4475L108.45 14.4005C107.894 13.8045 107.165 13.564 106.442 13.564V16.564ZM106.293 16.4847C106.273 16.4642 106.253 16.4398 106.235 16.4123C106.218 16.3849 106.206 16.3594 106.198 16.3386C106.183 16.2969 106.19 16.2889 106.19 16.336H109.19C109.19 15.6442 108.978 14.9265 108.415 14.3633L106.293 16.4847ZM106.19 16.336V35.992H109.19V16.336H106.19ZM106.19 35.992C106.19 37.9519 106.439 39.6579 107.037 41.0135L109.782 39.8025C109.42 38.9821 109.19 37.7441 109.19 35.992H106.19ZM107.037 41.0135C107.669 42.4438 108.726 43.5013 110.156 44.1324L111.367 41.3876C110.622 41.0587 110.111 40.5482 109.782 39.8025L107.037 41.0135ZM110.156 44.1324C111.512 44.7304 113.218 44.98 115.178 44.98V41.98C113.426 41.98 112.188 41.7496 111.367 41.3876L110.156 44.1324ZM115.178 44.98H120.938V41.98H115.178V44.98ZM120.938 44.98C122.884 44.98 124.581 44.7299 125.935 44.1324L124.724 41.3876C123.903 41.7501 122.672 41.98 120.938 41.98V44.98ZM125.935 44.1324C127.366 43.5013 128.423 42.4438 129.054 41.0135L126.309 39.8025C125.981 40.5482 125.47 41.0587 124.724 41.3876L125.935 44.1324ZM129.054 41.0135C129.652 39.6579 129.902 37.9519 129.902 35.992H126.902C126.902 37.7441 126.671 38.9821 126.309 39.8025L129.054 41.0135ZM129.902 35.992V16.336H126.902V35.992H129.902ZM129.902 16.336C129.902 16.2889 129.909 16.2969 129.893 16.3386C129.886 16.3594 129.874 16.3849 129.856 16.4123C129.839 16.4398 129.819 16.4642 129.799 16.4847L127.677 14.3633C127.114 14.9265 126.902 15.6442 126.902 16.336H129.902ZM129.799 16.4847C129.787 16.4959 129.771 16.5095 129.751 16.5229C129.73 16.5364 129.709 16.5467 129.69 16.554C129.651 16.5692 129.639 16.564 129.674 16.564V13.564C128.949 13.564 128.236 13.8042 127.677 14.3633L129.799 16.4847ZM129.674 16.564C129.71 16.564 129.69 16.5694 129.639 16.5492C129.583 16.527 129.529 16.4896 129.489 16.4475L131.682 14.4005C131.126 13.8045 130.397 13.564 129.674 13.564V16.564ZM129.525 16.4847C129.505 16.4642 129.485 16.4398 129.467 16.4123C129.45 16.3849 129.438 16.3594 129.43 16.3386C129.415 16.2969 129.422 16.2889 129.422 16.336H132.422C132.422 15.6442 132.21 14.9265 131.647 14.3633L129.525 16.4847ZM129.422 16.336V35.992H132.422V16.336H129.422ZM129.422 35.992C129.422 39.2744 128.661 41.3398 127.461 42.5393L129.583 44.6607C131.583 42.6602 132.422 39.6536 132.422 35.992H129.422ZM127.456 42.5447C126.274 43.7382 124.222 44.5 120.938 44.5V47.5C124.598 47.5 127.601 46.6618 129.588 44.6553L127.456 42.5447ZM120.938 44.5H115.178V47.5H120.938V44.5ZM147.884 45.688L146.823 46.7487L146.841 46.7669L146.86 46.7846L147.884 45.688ZM147.548 17.56H149.048V16.06H147.548V17.56ZM136.412 17.224L135.351 18.2847L135.369 18.3029L135.388 18.3206L136.412 17.224ZM136.412 15.4L135.351 14.3393L135.351 14.3393L136.412 15.4ZM161.204 15.4L160.107 16.4235L160.125 16.4424L160.143 16.4607L161.204 15.4ZM161.204 17.224L162.264 18.2847L162.264 18.2847L161.204 17.224ZM150.068 17.56V16.06H148.568V17.56H150.068ZM149.708 45.688L150.768 46.7487L150.768 46.7487L149.708 45.688ZM148.82 44.524C148.773 44.524 148.774 44.5174 148.804 44.5282C148.819 44.5335 148.837 44.5418 148.857 44.5537C148.877 44.5657 148.893 44.5788 148.907 44.5914L146.86 46.7846C147.424 47.3113 148.124 47.524 148.82 47.524V44.524ZM148.944 44.6273C148.965 44.6478 148.985 44.6722 149.002 44.6997C149.019 44.7271 149.031 44.7526 149.039 44.7734C149.054 44.8151 149.048 44.8231 149.048 44.776H146.048C146.048 45.4678 146.26 46.1855 146.823 46.7487L148.944 44.6273ZM149.048 44.776V17.56H146.048V44.776H149.048ZM147.548 16.06H137.348V19.06H147.548V16.06ZM137.348 16.06C137.301 16.06 137.302 16.0534 137.332 16.0642C137.347 16.0695 137.365 16.0778 137.385 16.0897C137.405 16.1017 137.421 16.1148 137.435 16.1274L135.388 18.3206C135.952 18.8473 136.652 19.06 137.348 19.06V16.06ZM137.472 16.1633C137.493 16.1838 137.513 16.2082 137.53 16.2357C137.547 16.2631 137.559 16.2886 137.567 16.3094C137.582 16.3511 137.576 16.3591 137.576 16.312H134.576C134.576 17.0038 134.788 17.7215 135.351 18.2847L137.472 16.1633ZM137.576 16.312C137.576 16.2649 137.582 16.2729 137.567 16.3146C137.559 16.3354 137.547 16.3609 137.53 16.3883C137.513 16.4158 137.493 16.4402 137.472 16.4607L135.351 14.3393C134.788 14.9025 134.576 15.6202 134.576 16.312H137.576ZM137.472 16.4607C137.461 16.4719 137.445 16.4855 137.424 16.4989C137.404 16.5124 137.383 16.5227 137.364 16.53C137.325 16.5452 137.313 16.54 137.348 16.54V13.54C136.623 13.54 135.91 13.7802 135.351 14.3393L137.472 16.4607ZM137.348 16.54H160.292V13.54H137.348V16.54ZM160.292 16.54C160.327 16.54 160.308 16.5454 160.257 16.5252C160.2 16.503 160.146 16.4656 160.107 16.4235L162.3 14.3765C161.744 13.7805 161.014 13.54 160.292 13.54V16.54ZM160.143 16.4607C160.122 16.4402 160.102 16.4158 160.085 16.3883C160.068 16.3609 160.056 16.3354 160.048 16.3146C160.033 16.2729 160.04 16.2649 160.04 16.312H163.04C163.04 15.6202 162.827 14.9025 162.264 14.3393L160.143 16.4607ZM160.04 16.312C160.04 16.3591 160.033 16.3511 160.048 16.3094C160.056 16.2886 160.068 16.2631 160.085 16.2357C160.102 16.2082 160.122 16.1838 160.143 16.1633L162.264 18.2847C162.827 17.7215 163.04 17.0038 163.04 16.312H160.04ZM160.143 16.1633C160.163 16.1429 160.188 16.123 160.215 16.1055C160.243 16.0881 160.268 16.0762 160.289 16.0685C160.331 16.0531 160.339 16.06 160.292 16.06V19.06C160.983 19.06 161.701 18.8478 162.264 18.2847L160.143 16.1633ZM160.292 16.06H150.068V19.06H160.292V16.06ZM148.568 17.56V44.776H151.568V17.56H148.568ZM148.568 44.776C148.568 44.7951 148.565 44.7733 148.582 44.7293C148.601 44.6828 148.627 44.6469 148.647 44.6273L150.768 46.7487C151.315 46.2023 151.568 45.5049 151.568 44.776H148.568ZM148.647 44.6273C148.685 44.5891 148.736 44.5564 148.787 44.5371C148.833 44.5194 148.851 44.524 148.82 44.524V47.524C149.516 47.524 150.217 47.2996 150.768 46.7487L148.647 44.6273ZM168.47 44.056L167.448 45.1543L167.455 45.1604L167.462 45.1665L168.47 44.056ZM166.262 38.032L167.761 37.9794L167.761 37.9696L166.262 38.032ZM166.574 37.12L167.635 38.1807L167.635 38.1807L166.574 37.12ZM168.422 37.096L167.361 38.1567L167.361 38.1567L168.422 37.096ZM168.806 38.008L170.305 37.9604L170.304 37.9219L170.301 37.8834L168.806 38.008ZM170.246 42.232L169.247 43.3509L169.247 43.3509L170.246 42.232ZM186.494 42.112L185.433 41.0513L185.433 41.0513L186.494 42.112ZM186.494 32.68L185.424 33.7311L185.433 33.7407L185.443 33.7502L186.494 32.68ZM168.998 29.368L170.059 28.3073L170.059 28.3073L168.998 29.368ZM168.974 17.032L167.913 15.9713L167.907 15.9779L168.974 17.032ZM187.838 16.864L186.819 17.9647L186.826 17.9708L187.838 16.864ZM189.95 22.528L188.451 22.5839L188.452 22.6183L188.455 22.6526L189.95 22.528ZM189.638 23.464L190.699 24.5247L190.699 24.5247L189.638 23.464ZM187.814 23.464L188.875 22.4033L188.875 22.4033L187.814 23.464ZM187.43 22.552L185.931 22.6041L185.932 22.6404L185.935 22.6766L187.43 22.552ZM170.774 18.832L171.835 19.8927L171.84 19.8875L171.845 19.8823L170.774 18.832ZM170.774 27.592L169.703 28.6423L169.713 28.6527L169.724 28.6629L170.774 27.592ZM188.294 30.904L187.227 31.9585L187.233 31.9647L188.294 30.904ZM188.294 43.912L189.348 44.9789L189.355 44.9727L188.294 43.912ZM174.854 44.452C172.174 44.452 170.481 43.8557 169.478 42.9455L167.462 45.1665C169.243 46.7843 171.806 47.452 174.854 47.452V44.452ZM169.492 42.9577C168.518 42.0519 167.849 40.4991 167.761 37.9794L164.763 38.0846C164.866 41.0369 165.67 43.5001 167.448 45.1543L169.492 42.9577ZM167.761 37.9696C167.759 37.9279 167.766 37.9465 167.747 38.0015C167.726 38.0629 167.687 38.1284 167.635 38.1807L165.513 36.0593C164.93 36.6421 164.734 37.3879 164.763 38.0944L167.761 37.9696ZM167.635 38.1807C167.623 38.1919 167.607 38.2055 167.587 38.2189C167.566 38.2324 167.545 38.2427 167.526 38.25C167.487 38.2652 167.475 38.26 167.51 38.26V35.26C166.785 35.26 166.072 35.5002 165.513 36.0593L167.635 38.1807ZM167.51 38.26C167.557 38.26 167.549 38.2669 167.507 38.2515C167.486 38.2438 167.461 38.2319 167.434 38.2145C167.406 38.197 167.382 38.1771 167.361 38.1567L169.483 36.0353C168.919 35.4722 168.202 35.26 167.51 35.26V38.26ZM167.361 38.1567C167.347 38.1427 167.335 38.1271 167.324 38.111C167.313 38.0951 167.307 38.082 167.303 38.0741C167.297 38.0583 167.306 38.0722 167.311 38.1326L170.301 37.8834C170.246 37.2254 170.009 36.5614 169.483 36.0353L167.361 38.1567ZM167.307 38.0556C167.375 40.2174 167.891 42.1405 169.247 43.3509L171.245 41.1131C170.809 40.7235 170.364 39.8306 170.305 37.9604L167.307 38.0556ZM169.247 43.3509C170.567 44.5299 172.577 44.932 174.854 44.932V41.932C172.778 41.932 171.716 41.5341 171.245 41.1131L169.247 43.3509ZM174.854 44.932H181.766V41.932H174.854V44.932ZM181.766 44.932C184.138 44.932 186.236 44.4911 187.555 43.1727L185.433 41.0513C184.992 41.4929 183.938 41.932 181.766 41.932V44.932ZM187.555 43.1727C188.882 41.8448 189.338 39.7646 189.338 37.408H186.338C186.338 39.5314 185.897 40.5872 185.433 41.0513L187.555 43.1727ZM189.338 37.408C189.338 35.031 188.887 32.928 187.545 31.6098L185.443 33.7502C185.893 34.192 186.338 35.241 186.338 37.408H189.338ZM187.564 31.6289C186.246 30.2868 184.143 29.836 181.766 29.836V32.836C183.933 32.836 184.982 33.2812 185.424 33.7311L187.564 31.6289ZM181.766 29.836H175.19V32.836H181.766V29.836ZM175.19 29.836C172.569 29.836 170.973 29.2215 170.059 28.3073L167.937 30.4287C169.647 32.1385 172.179 32.836 175.19 32.836V29.836ZM170.059 28.3073C169.143 27.3919 168.53 25.8018 168.53 23.2H165.53C165.53 26.1982 166.229 28.7201 167.937 30.4287L170.059 28.3073ZM168.53 23.2C168.53 20.5939 169.137 19.0012 170.041 18.0861L167.907 15.9779C166.219 17.6868 165.53 20.2061 165.53 23.2H168.53ZM170.035 18.0927C170.95 17.1772 172.54 16.564 175.142 16.564V13.564C172.144 13.564 169.622 14.2628 167.913 15.9713L170.035 18.0927ZM175.142 16.564H181.862V13.564H175.142V16.564ZM181.862 16.564C184.364 16.564 185.914 17.1272 186.819 17.9646L188.857 15.7634C187.169 14.2008 184.736 13.564 181.862 13.564V16.564ZM186.826 17.9708C187.73 18.798 188.363 20.228 188.451 22.5839L191.449 22.4721C191.345 19.676 190.57 17.33 188.85 15.7571L186.826 17.9708ZM188.455 22.6526C188.457 22.6764 188.451 22.6426 188.473 22.5757C188.497 22.5035 188.538 22.4426 188.577 22.4033L190.699 24.5247C191.295 23.9283 191.508 23.1606 191.445 22.4034L188.455 22.6526ZM188.577 22.4033C188.601 22.3797 188.628 22.3581 188.657 22.3401C188.685 22.3222 188.711 22.3109 188.729 22.3042C188.765 22.2912 188.764 22.3 188.702 22.3V25.3C189.39 25.3 190.124 25.0992 190.699 24.5247L188.577 22.4033ZM188.702 22.3C188.67 22.3 188.688 22.2954 188.735 22.3131C188.786 22.3324 188.836 22.3651 188.875 22.4033L186.753 24.5247C187.304 25.0756 188.006 25.3 188.702 25.3V22.3ZM188.875 22.4033C188.888 22.4173 188.901 22.4329 188.912 22.4489C188.923 22.4649 188.929 22.478 188.932 22.4859C188.939 22.5017 188.93 22.4878 188.925 22.4274L185.935 22.6766C185.99 23.3346 186.227 23.9986 186.753 24.5247L188.875 22.4033ZM188.929 22.4999C188.86 20.5069 188.371 18.7069 187.08 17.5645L185.092 19.8115C185.465 20.1411 185.872 20.9171 185.931 22.6041L188.929 22.4999ZM187.08 17.5645C185.827 16.4565 183.953 16.084 181.862 16.084V19.084C183.739 19.084 184.681 19.4475 185.092 19.8115L187.08 17.5645ZM181.862 16.084H175.142V19.084H181.862V16.084ZM175.142 16.084C172.938 16.084 170.956 16.504 169.703 17.7817L171.845 19.8823C172.224 19.496 173.154 19.084 175.142 19.084V16.084ZM169.713 17.7713C168.46 19.0248 168.05 21.0015 168.05 23.2H171.05C171.05 21.2065 171.456 20.2712 171.835 19.8927L169.713 17.7713ZM168.05 23.2C168.05 25.403 168.462 27.3767 169.703 28.6423L171.845 26.5417C171.454 26.1433 171.05 25.189 171.05 23.2H168.05ZM169.724 28.6629C170.991 29.9057 172.975 30.316 175.19 30.316V27.316C173.181 27.316 172.221 26.9103 171.824 26.5211L169.724 28.6629ZM175.19 30.316H181.766V27.316H175.19V30.316ZM181.766 30.316C184.546 30.316 186.25 30.9704 187.227 31.9585L189.361 29.8495C187.585 28.0536 184.937 27.316 181.766 27.316V30.316ZM187.233 31.9647C188.211 32.9422 188.858 34.6421 188.858 37.408H191.858C191.858 34.2539 191.129 31.6178 189.355 29.8433L187.233 31.9647ZM188.858 37.408C188.858 40.1739 188.211 41.8738 187.233 42.8513L189.355 44.9727C191.129 43.1982 191.858 40.5621 191.858 37.408H188.858ZM187.239 42.8452C186.264 43.8097 184.555 44.452 181.766 44.452V47.452C184.929 47.452 187.572 46.7343 189.348 44.9788L187.239 42.8452ZM181.766 44.452H174.854V47.452H181.766V44.452Z'
                fill='black'
              />
              <circle
                cx='30'
                cy='30'
                r='30'
                fill='black'
                className='logo__path'
              />
              <circle
                className='logo__path'
                cx='30'
                cy='30'
                r='24.25'
                fill='black'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeDasharray='27.5 10'
              />
              <path
                className='logo__path'
                d='M43 17.9029C45.5938 16.2914 45.3103 16.9668 44 18.9029L19.2115 41.3939C16.5125 42.4189 15.3565 42.57 16.3552 39.2103L43 17.9029Z'
                fill='white'
              />
              <path
                className='logo__path'
                d='M17.9766 18.3059C15.3828 16.6943 15.6663 17.3698 16.9766 19.3059L41.765 41.7968C44.464 42.8219 45.6201 42.973 44.6214 39.6133L17.9766 18.3059Z'
                fill='white'
              />
              <path
                className='logo__path'
                d='M33.5 28.4029L35.6565 30.5237L32.3901 33.7918L28.5 32.903L33.5 28.4029Z'
                fill='black'
              />
            </svg>
          </Link>
          <div className='navbar__headings'>
            <div className='navbar__headings__group'>
              <Link
                to={{
                  pathname: '/shop-all',
                }}
                className='link navbar__headings__shop'
              >
                <h4 className='navbar__headings__h4'>shop</h4>
              </Link>
              <div className='navbar__drop navbar__drop__shop '>
                <DropShop />
              </div>
            </div>
            <div className='navbar__headings__group'>
              <Link
                className=' link navbar__headings__collections'
                to={{
                  pathname: '/collections/all-products',
                }}
              >
                <h4 className='navbar__headings__h4 '>collections</h4>
              </Link>
              <div className='navbar__drop navbar__drop__collections'>
                <NavbarDropCollections />
              </div>
            </div>
            <h4 className='navbar__headings__h4'>blog</h4>
            <h4 className='navbar__headings__h4'>Brand</h4>
          </div>
          <div className='navbar__icons'>
            <Link
              className='link'
              to={{
                pathname: '/account',
              }}
            >
              <svg
                className='navbar__icons__icon'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width='15px'
                height='15px'
              >
                <ellipse
                  cx='9.99998'
                  cy='3.91933'
                  rx='4.54546'
                  ry='3.91933'
                  fill='black'
                />
                <path
                  d='M20 15.6773C20 20.4394 15.5228 19.9886 10 19.9886C4.47715 19.9886 0 20.4394 0 15.6773C0 10.9152 4.47715 8.62253 10 8.62253C15.5228 8.62253 20 10.9152 20 15.6773Z'
                  fill='black'
                />
              </svg>
            </Link>
            <svg
              className='navbar__icons__icon'
              width='15'
              height='15'
              viewBox='0 0 22 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.3584 7.86266C18.3584 11.4686 14.6768 14.7253 9.67918 14.7253C4.68155 14.7253 1 11.4686 1 7.86266C1 4.25671 4.68155 1 9.67918 1C14.6768 1 18.3584 4.25671 18.3584 7.86266Z'
                fill='white'
                stroke='black'
                strokeWidth='2'
              />
              <line
                y1='-1'
                x2='8.61907'
                y2='-1'
                transform='matrix(0.702427 0.711756 -0.837974 0.545711 13.9457 13.8653)'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
            <svg
              className='navbar__icons__icon'
              viewBox='0 0 22 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
            >
              <path
                d='M6.35016 5H21.3502C21.3502 5 20.3502 12.5 18.8502 12.5C17.3502 12.5 9.85016 12.5 8.35016 12.5C6.85016 12.5 6.35016 5 6.35016 5Z'
                fill='black'
              />
              <path
                d='M7.26018 7.66667C6.95685 5.44444 5.5312 1 2.25524 1C-1.02072 1 -0.0197359 1 0.890254 1'
                stroke='black'
              />
              <path
                d='M10.7082 16C10.7082 17.1046 10.0971 18 9.34325 18C8.58939 18 7.97827 17.1046 7.97827 16C7.97827 14.8954 8.58939 14 9.34325 14C10.0971 14 10.7082 14.8954 10.7082 16Z'
                fill='black'
              />
              <ellipse cx='17.3433' cy='16' rx='1.36498' ry='2' fill='black' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
