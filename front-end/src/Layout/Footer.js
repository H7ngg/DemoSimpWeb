import React from 'react';
import '../assets/css/Footer.css';

const sharedClasses = {
  textMutedForeground: 'text-muted-foreground',
  textDestructive: 'text-destructive',
  bgDestructive: 'bg-destructive',
  textDestructiveForeground: 'text-destructive-foreground',
  bgInput: 'bg-input',
  textForeground: 'text-foreground',
  border: 'border',
  focusOutlineNone: 'focus:outline-none',
  focusRing2: 'focus:ring-2',
  focusRingRing: 'focus:ring-ring',
  roundedLmd: 'rounded-l-md',
  roundedRmd: 'rounded-r-md',
  wFull: 'w-full',
  hFull: 'h-full',
  objectCover: 'object-cover',
  inlineBlock: 'inline-block',
  spaceX4: 'space-x-4',
  flex: 'flex',
  justifyCenter: 'justify-center',
  gridCols1: 'grid-cols-1',
  gridCols3: 'grid-cols-3',
  gap2: 'gap-2',
  grid: 'grid',
  container: 'container',
  mxAuto: 'mx-auto',
  px4: 'px-4',
  py8: 'py-8',
  mt8: 'mt-8',
  borderT: 'border-t',
  pt4: 'pt-4',
  textCenter: 'text-center',
  borderBorder: 'border-border',
  mb4: 'mb-4',
  mb2: 'mb-2',
  mb8: 'mb-8',
  mt4: 'mt-4',
  spaceX8: 'space-x-8',
  bgBlack: 'bg-black', // Added for black background
  textWhite: 'text-white', // Added for white text
};

const Footer = () => {
  return (
    <div className={`${sharedClasses.bgBlack} ${sharedClasses.textWhite} ${sharedClasses.py8}`}>
      <div className={`${sharedClasses.container} ${sharedClasses.mxAuto} ${sharedClasses.px4} ${sharedClasses.grid} ${sharedClasses.gridCols1} md:${sharedClasses.gridCols4} ${sharedClasses.gap8}`}>
        <div>
          <h3 className={`text-lg font-bold ${sharedClasses.mb4}`}>About the Nobel Prize organisation</h3>
          <h4>The Nobel Foundation</h4>
          
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb4}`}>
            Tasked with a mission to manage Alfred Nobel's fortune and has ultimate responsibility for fulfilling the intentions of Nobel's will.
          </p>
        </div>

        <div>
          <h4>The prize-awarding institutions</h4>
          
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb4}`}>
            For more than a century, these academic institutions have worked independently to select Nobel Prize laureates.
          </p>
        </div>
        
        <div>
          <h4 className={`text-lg font-bold ${sharedClasses.mb4}`}>Email Updates</h4>
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb4}`}>
            Enter your email and you'll be one of the first to get new updates:
          </p>
          <div className={sharedClasses.flex}>
            <input type="email" placeholder="Email..." className={`${sharedClasses.bgInput} ${sharedClasses.textForeground} p-2 ${sharedClasses.roundedLmd} ${sharedClasses.border} ${sharedClasses.borderBorder} ${sharedClasses.focusOutlineNone} ${sharedClasses.focusRing2} ${sharedClasses.focusRingRing}`} />
            <button className={`${sharedClasses.bgDestructive} ${sharedClasses.textDestructiveForeground} p-2 ${sharedClasses.roundedRmd}`}>Subscribe</button>
          </div>
        </div>
        
        <div>
          <h3 className={`text-lg font-bold ${sharedClasses.mb4}`}>CONTACT US</h3>
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb2}`}>
            <span className={sharedClasses.inlineBlock}><img aria-hidden="true" alt="location" src="https://openui.fly.dev/openui/24x24.svg?text=📍" /></span>
            Address: 778/10 Đ. Nguyễn Kiệm, Phường 3, Phú Nhuận, Hồ Chí Minh 700990
          </p>
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb2}`}>
            <span className={sharedClasses.inlineBlock}><img aria-hidden="true" alt="phone" src="https://openui.fly.dev/openui/24x24.svg?text=📞" /></span>
            Phone: 1800 282824
          </p>
          <p className={`${sharedClasses.textMutedForeground} ${sharedClasses.mb2}`}>
            <span className={sharedClasses.inlineBlock}><img aria-hidden="true" alt="skype" src="https://openui.fly.dev/openui/24x24.svg?text=👤" /></span>
            Trung tâm đào tạo ở Thành phố Hồ Chí Minh
          </p>
          <p className={sharedClasses.textMutedForeground}>
            <span className={sharedClasses.inlineBlock}><img aria-hidden="true" alt="email" src="https://openui.fly.dev/openui/24x24.svg?text=📧" /></span>
            Email: <a href="mailto:contact@gioia.com" className={sharedClasses.textDestructive}>aptech2@aprotrain.com</a>
          </p>
        </div>
      </div>
      
      <div className={`${sharedClasses.container} ${sharedClasses.mxAuto} ${sharedClasses.px4} ${sharedClasses.mt8} ${sharedClasses.borderT} ${sharedClasses.borderBorder} ${sharedClasses.pt4} ${sharedClasses.textCenter} ${sharedClasses.textMutedForeground}`}>
        <p>POPULAR PERSON <a href="#" className={sharedClasses.textDestructive}></a>.</p>
        <div className={`${sharedClasses.flex} ${sharedClasses.justifyCenter} ${sharedClasses.spaceX4} ${sharedClasses.mt4}`}>
          {['facebook', 'globe', 'twitter', 'pinterest'].map((socialMedia, index) => (
            <a key={index} href="#"><img aria-hidden="true" alt={socialMedia} src={`https://openui.fly.dev/openui/24x24.svg?text=${socialMedia.charAt(0).toUpperCase()}`} /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
