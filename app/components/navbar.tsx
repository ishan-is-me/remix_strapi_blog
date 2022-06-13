import { Link } from '@remix-run/react';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div>
              <Link to="/">
                <svg
                  width="54"
                  height="51"
                  viewBox="0 0 74 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.760254"
                    y="0.247559"
                    width="72.3153"
                    height="70.4948"
                    rx="4"
                    fill="#2ECC34"
                  />
                  <path
                    d="M16.9609 17.0615C18.0443 17.0954 18.9922 17.1123 19.8047 17.1123C20.6172 17.0785 21.2773 17.0615 21.7852 17.0615H23.2578C23.6302 17.0277 24.0872 17.0107 24.6289 17.0107C25.1029 17.0107 25.6784 17.0107 26.3555 17.0107C27.0326 17.0107 27.8112 17.0277 28.6914 17.0615C28.9622 18.0094 29.2669 18.9404 29.6055 19.8545C29.9779 20.7347 30.2995 21.5303 30.5703 22.2412C30.9089 23.0876 31.2474 23.8831 31.5859 24.6279C31.9245 25.3727 32.3307 26.2699 32.8047 27.3193C33.2109 28.1995 33.7018 29.2829 34.2773 30.5693C34.8529 31.8219 35.5299 33.2607 36.3086 34.8857C36.681 33.8363 37.0195 32.8714 37.3242 31.9912C37.6628 31.111 37.9505 30.3493 38.1875 29.7061C38.4583 28.9613 38.6784 28.2842 38.8477 27.6748C39.0169 27.0654 39.2031 26.3206 39.4062 25.4404C39.5755 24.6956 39.7617 23.7985 39.9648 22.749C40.2018 21.6995 40.4388 20.4808 40.6758 19.0928C41.6576 19.0928 42.5378 19.0928 43.3164 19.0928C44.0951 19.0928 44.7721 19.0758 45.3477 19.042C45.9909 19.042 46.5664 19.0251 47.0742 18.9912C47.6159 18.9912 48.3438 18.9574 49.2578 18.8896C50.0365 18.8219 51.069 18.7712 52.3555 18.7373C53.6758 18.6696 55.3008 18.585 57.2305 18.4834C56.5195 18.9912 55.944 19.499 55.5039 20.0068C55.0977 20.4808 54.776 20.904 54.5391 21.2764C54.2682 21.7165 54.099 22.1396 54.0312 22.5459C53.9635 22.8844 53.8958 23.6631 53.8281 24.8818C53.7943 26.1006 53.7435 27.5563 53.6758 29.249C53.6419 30.9079 53.6081 32.6852 53.5742 34.5811C53.5742 36.4769 53.5911 38.2712 53.625 39.9639C53.6589 41.6566 53.7096 43.1292 53.7773 44.3818C53.8789 45.6006 54.0143 46.3792 54.1836 46.7178C54.4206 47.124 54.7422 47.598 55.1484 48.1396C55.5208 48.6136 55.9948 49.1553 56.5703 49.7646C57.1797 50.374 57.9753 51.0511 58.957 51.7959C57.3997 51.8636 56.0964 51.9144 55.0469 51.9482C54.0312 51.9821 53.1849 52.016 52.5078 52.0498C51.7292 52.0837 51.1029 52.1006 50.6289 52.1006C50.1211 52.1006 49.4271 52.1175 48.5469 52.1514C47.7682 52.1852 46.7357 52.236 45.4492 52.3037C44.1628 52.3376 42.5039 52.4053 40.4727 52.5068C40.9466 51.9652 41.3867 51.4235 41.793 50.8818C42.1992 50.3402 42.5378 49.8493 42.8086 49.4092C43.1471 48.9014 43.4349 48.4105 43.6719 47.9365C43.9089 47.2933 44.0951 46.1253 44.2305 44.4326C44.3659 42.9769 44.4674 40.8949 44.5352 38.1865C44.6029 35.4443 44.6029 31.7712 44.5352 27.167C43.8919 28.2165 43.3164 29.266 42.8086 30.3154C42.3346 31.3311 41.9115 32.262 41.5391 33.1084C41.1328 34.0902 40.7604 35.0381 40.4219 35.9521C40.0833 36.9001 39.7279 37.9495 39.3555 39.1006C39.0169 40.0824 38.6107 41.2503 38.1367 42.6045C37.6966 43.9587 37.1888 45.4482 36.6133 47.0732L34.6836 47.1748C34.4128 45.8206 34.1419 44.6019 33.8711 43.5186C33.6003 42.4014 33.3294 41.4535 33.0586 40.6748C32.7539 39.7607 32.4492 38.9482 32.1445 38.2373C31.806 37.5264 31.4336 36.7308 31.0273 35.8506C30.6549 35.1058 30.1979 34.2256 29.6562 33.21C29.1484 32.1943 28.556 31.0602 27.8789 29.8076C27.5404 33.2607 27.3372 36.0706 27.2695 38.2373C27.2018 40.3701 27.2018 42.029 27.2695 43.2139C27.3372 44.6357 27.4388 45.6683 27.5742 46.3115C27.7773 46.887 28.099 47.5303 28.5391 48.2412C28.9115 48.8506 29.4193 49.5785 30.0625 50.4248C30.7396 51.2373 31.6029 52.1514 32.6523 53.167C31.9076 53.167 31.1289 53.167 30.3164 53.167C29.5039 53.167 28.7591 53.1839 28.082 53.2178C27.2695 53.2516 26.474 53.2686 25.6953 53.2686C24.8828 53.3024 23.9349 53.3532 22.8516 53.4209C21.9036 53.4886 20.7695 53.5563 19.4492 53.624C18.1289 53.6917 16.6055 53.8102 14.8789 53.9795C15.6237 53.5055 16.2331 53.0485 16.707 52.6084C17.181 52.1344 17.5534 51.7113 17.8242 51.3389C18.1628 50.8988 18.4167 50.4587 18.5859 50.0186C18.6875 49.7477 18.7721 49.1553 18.8398 48.2412C18.9414 47.3271 19.026 46.21 19.0938 44.8896C19.1953 43.5693 19.263 42.0967 19.2969 40.4717C19.3646 38.8467 19.4154 37.2048 19.4492 35.5459C19.5169 33.8532 19.5677 32.2113 19.6016 30.6201C19.6354 28.9951 19.6523 27.5394 19.6523 26.2529C19.6862 24.9326 19.7031 23.8324 19.7031 22.9521C19.7031 22.0719 19.7031 21.5133 19.7031 21.2764C19.6016 20.7686 19.4492 20.2607 19.2461 19.7529C19.0768 19.3128 18.806 18.8558 18.4336 18.3818C18.0612 17.9079 17.5703 17.4678 16.9609 17.0615Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium pr-5 text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
              </Link>
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium pr-5 text-gray-500 hover:text-gray-900"
              >
                <Link to="/about">
                About
                </Link>

              </a>
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;