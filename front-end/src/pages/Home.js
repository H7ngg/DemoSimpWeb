import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Home.css';
import Alain_Aspect from '../image/Alain Aspect.jpg';
import John_Clauser from '../image/John Clauser.jpg';
import Riccardo_Giacconi from '../image/Riccardo-Giacconi.jpg';
import Roger_Penrose from '../image/Roger Penrose.jpg';
import KOpprann from '../image/KOpprann.jpg';
import KristianBergHarpviken from '../image/Kristian Berg Harpviken.jpg';
import NargesMohammadi from '../image/Narges Mohammadi.jpg';

const sharedClasses = {
  card: 'bg-card card grid-item',
  destructive: 'destructive-button',
  mutedForeground: 'text-muted-foreground',
};
const containerClass = 'max-w-4xl mx-auto p-6 bg-background text-foreground';
const titleClass = 'text-2xl font-bold mb-4';
const subtitleClass = 'text-xl font-semibold mb-2';
const paragraphClass = 'mb-4';
const imageContainerClass = 'flex items-center mt-4';
const imageClass = 'rounded-full mr-4';
const captionClass = 'text-sm text-muted-foreground';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground py-12">
      <div>
        <p style={{
          textAlign: 'center',
          color: '#808080',
          fontWeight: 'bold',
          fontSize: '2em',
          marginTop: '1em',
          marginBottom: '1em'
        }}>
          YOU COULD ALREADY KNOW ABOUT THESE PERSON
        </p>
      </div>
      <div className="grid-container max-w-6xl mx-auto">
        <Card
          src={Alain_Aspect}
          title="Alain Aspect"
          description={<p style={{ color: '#7F8C8D' }}>A French physicist noted for his experimental work on quantum entanglement.Awarded the 2022 Nobel Prize in Physics</p>}
          onClick={() => navigate(`/scientist/7`)}
        />
        <Card
          src={John_Clauser}
          title="John Clauser"
          description={<p style={{ color: '#7F8C8D' }}>an American theoretical and experimental physicist known for contributions to the foundations of quantum mechanics</p>}
          onClick={() => navigate(`/scientist/8`)}
        />
        <Card
          src={Riccardo_Giacconi}
          title="Riccardo Giacconi"
          description={<p style={{ color: '#7F8C8D' }}>an Italian-American Nobel Prize-winning astrophysicist who laid down the foundations of X-ray astronomy.</p>}
          onClick={() => navigate(`/scientist/52`)}
        />
        <Card
          src={Roger_Penrose}
          title="Roger Penrose"
          description={<p style={{ color: '#7F8C8D' }}>a British mathematician, mathematical physicist, philosopher of science and Nobel Laureate in Physics.</p>}
          onClick={() => navigate(`/scientist/18`)}
        />
      </div>

      <div className={containerClass}>
        <h1 className={titleClass} style={{
          textAlign: 'center',
          color: '#808080',
          fontWeight: 'bold',
          fontSize: '2em',
          marginTop: '1em',
          marginBottom: '1em'
        }}>Nobel Peace Prize awarded work</h1>
        <hr className={sharedClasses.hr} />

        <div className="container flex flex-wrap items-center mb-6">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className={subtitleClass}>Nobel Peace Prize 2014</h2>
            <h3 className={paragraphClass}>The very symbol of girls' right to education</h3>
            <p className={paragraphClass}>
              Already at eleven years of age Malala Yousafzai fought for girls' right to education. After having suffered an attack on her life by Taliban gunmen in 2012, she has continued her struggle and
              become a leading advocate of girls' rights.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              aria-hidden="true"
              alt="Photo of Malala Yousafzai"
              src={KOpprann}
              style={{ width: '100%', height: 'auto' }}
            />
            <p className={captionClass}>Photo: K. Opprann</p>
          </div>
        </div>

        <div className="container flex flex-wrap items-center mb-6">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className={subtitleClass}>Nobel Peace Prize 2023</h2>
            <h3 className={paragraphClass}>A champion of equality and women’s rights</h3>
            <p className={paragraphClass}>
              More than 20 years of fighting for women’s rights made her a symbol of freedom and standard-bearer in the struggle against the Iranian theocracy. In 2003, she joined the Defenders of Human Rights Center, founded by that year’s Nobel Peace Prize laureate, Shirin Ebadi. In the years that followed, Ms Mohammadi helped imprisoned activists, led a campaign against the death penalty and criticized the regime’s use of torture and sexualized violence.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              aria-hidden="true"
              alt="Photo of Narges Mohammadi"
              src={NargesMohammadi}
              style={{ width: '100%', height: 'auto' }}
            />
            <p className={captionClass}>Narges Mohammadi</p>
          </div>
        </div>

        <div className="container flex flex-wrap items-center mb-6">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className={subtitleClass}>Kristian Berg Harpviken new Director of the Norwegian Nobel Institute</h2>
            <h3 className={paragraphClass}>Kristian Berg Harpviken will become the new Director of the Norwegian Nobel Institute. He is currently Research Professor at the Peace Research Institute Oslo (PRIO). "I have worked with peace
              my entire life, so for me, this is the dream job," says Dr Harpviken.
            </h3>
            <p className={paragraphClass}>
              The Norwegian Nobel Institute serves as the secretariat for the Norwegian Nobel Committee, which has awarded the Nobel Peace Prize since the very beginning in 1901.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              aria-hidden="true"
              alt="Photo of Kristian Berg Harpviken"
              src={KristianBergHarpviken}
              style={{ width: '100%', height: 'auto' }}
            />
            <p className={captionClass}>Kristian Berg Harpviken. Photo: PRIO</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const Card = ({ src, title, description, onClick }) => {
  return (
    <div className={sharedClasses.card} onClick={onClick}>
      <div className="flex items-center justify-center mb-4">
        <img src={src} alt={title} className="card-image" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className={sharedClasses.mutedForeground}>{description}</p>
      <button className={sharedClasses.destructive}>Read more</button>
    </div>
  );
};

export default Home;
