import React, { useEffect, useState, useRef } from 'react';
// styles
import './Homepage.css';
// components
import { Navbar, Footer } from '../../components';
// icons
import { FiChevronDown } from 'react-icons/fi';
// util
import images from '../../util/images';
import advantages from '../../util/advantages';

export function Homepage() {
    // state attributes
    const [navbarColor, setNavbarColor] = useState(false);
    // references
    const headerRef = useRef();
    const aboutSectionRef = useRef();
    const advantagesSectionRef = useRef();
    const contactSectionRef = useRef();

    const rootLink = {
        action: () => scrollToSection(headerRef)
    }

    const navbarLinks = [
        {
            id: 'about',
            name: 'Sobre o sistema',
            action: () => scrollToSection(aboutSectionRef)
        },
        {
            id: 'advantages',
            name: 'Vantagens',
            action: () => scrollToSection(advantagesSectionRef)
        },
        {
            id: 'contact',
            name: 'Fale conosco',
            action: () => scrollToSection(contactSectionRef)
        }
    ]

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const windowOffset = window.pageYOffset;
            setNavbarColor(windowOffset > 80);
        })
    }, []);

    const scrollToSection = (section) => {
        window.scroll(0, section.current.offsetTop);
    }

    return (
        <>
            <header style={{ backgroundImage: `url(${images.header})` }} ref={headerRef}>
                <Navbar color={navbarColor} rootLink={rootLink} links={navbarLinks} />

                <div className="header">
                    <div className="container">
                        <div className="header-content">
                            <div className="header-content-info">
                                <div>
                                    <h1>Uma solução eficiente para a correção de provas objetivas</h1>
                                    <h2>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi quo minus vero eveniet exercitationem quod incidunt.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi quo minus vero eveniet exercitationem quod incidunt.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-footer">
                        <span>Saiba mais</span>
                        <FiChevronDown
                            size={80}
                            color="#ffffff"
                            className="header-icon"
                            onClick={() => scrollToSection(aboutSectionRef)}
                        />
                    </div>
                </div>
            </header>

            <section ref={aboutSectionRef}>
                <div className="container">
                    <h3>Sobre o sistema</h3>
                    <h4>Saiba como a correção de provas funciona</h4>

                    <div className="about-content">
                        <div className="text">
                            <p>
                                O Test Correction é um sistema que visa auxiliar os docentes no trabalho de correção de provas objetivas.
                                A principal função do sistema é reduzir o tempo que os professores levam para realizar essa atividade,
                                sem gerar erros e possibilitando um maior controle de análise sobre o desempenho de seus alunos.
                            </p>

                            <img src={images.teacher} alt="Professora" />
                        </div>

                        <img src={images.answerCard} alt="Gabarito" />
                    </div>
                </div>
            </section>

            <div className="divider" />

            <section ref={advantagesSectionRef}>
                <div className="container">
                    <h3>Vantagens</h3>
                    <h4>Veja os benefícios que você terá ao utilizar o TestCorrection</h4>

                    <div className="avantages-content">
                        {advantages.map(item => (
                            <div className="content-item" key={item.id}>
                                <h5>{item.title}</h5>
                                <img src={item.image} alt={item.title}/>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            <section ref={contactSectionRef}>
                <div className="container">
                    <h3>Entre em contato conosco</h3>
                    <h4>Tire suas dúvidas ou envie uma sugestão</h4>

                    <div className="contact-form">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="form-line">
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder="Seu nome aqui"
                                />
                                <input
                                    type="email"
                                    name="contactEmail"
                                    placeholder="Seu melhor e-mail"
                                />
                            </div>

                            <textarea
                                name="contactMessage"
                                cols="30"
                                rows="10"
                                placeholder="Digite a sua mensagem aqui"
                            />

                            <button
                                type="submit"
                            >
                                Enviar
                            </button>
                        </form>

                        <img src={images.contact} alt="Contato"/>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
