import React from "react";
import { Button } from "react-bootstrap";
import "./SpCard.css";
import Card from "react-bootstrap/Card";
import img0 from "./spc0.svg";
import img1 from "./spc1.svg";
import img2 from "./spc2.svg";
import img3 from "./spc3.svg";
import img4 from "./spc4.svg";
import img5 from "./spc5.svg";

const SpCard = () => {
  return (
    <div className="Spcard-container">
      <Card>
        <Card.Img variant="top" src={img0} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="Spcard-container-0">
            Artists now get 100 days of FREE access to Output’s plug-in ARCADE,
            a sample playground with new content delivered every day and tools
            to transform it all so it sounds like you. Over 35,000 playable
            sounds included with your subscription. First-time subscribers only.
            Cancel anytime.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={img1} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="Spcard-container-0">
            users get access to an extended, 30-day trial of Music Production
            Suite Pro. Try all of iZotope’s Pro music products for
            free—including RX Pro for Music, Ozone Pro, Neutron Pro, VocalSynth
            Pro, and more—plus all of our skill-building content, presets, and
            royalty-free samples. Visit our website to start your extended trial
            for free.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>tope</Card.Title>
          <Card.Text className="Spcard-container-0">
            you can enjoy everything Neutron Elements has to offer—for free.
            From its EQ, Compressor, Transient Shaper, and Exciter to hundreds
            of professionally designed presets, you’ll always be confident
            you're on your way to a great mix. Neutron Elements is the easiest,
            most intelligent way to bring unrivaled quality and speed to your
            workflow. Visit our website to claim your free benefits.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="Spcard-container-0">
            Spitfire Audio make inspiring orchestral sounds to elevate and
            finesse your music production. As a artist you benefit from 35% off
            Spitfire Audio's legendary Abbey Road One library - Get unparalleled
            and exclusive access to the world’s most celebrated recording
            location for movie music.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={img4} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="Spcard-container-0">
            Apple Music, TikTok, Amazon Music or any other streaming service
            around the world? SoundBetter has teamed up with TuneCore, one of
            the leading global distributors, to give you a 50% discount on your
            next single or album release - that’s the equivalent of 6 months
            free distribution. Click below to get it now. New Tunecore users
            only.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={img5} alt="" style={{ height: "80px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="Spcard-container-0">
            Apple Music, TikTok, Amazon Music or any other streaming service
            around the world? SoundBetter has teamed up with TuneCore, one of
            the leading global distributors, to give you a 50% discount on your
            next single or album release - that’s the equivalent of 6 months
            free distribution. Click below to get it now. New Tunecore users
            only.
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className="spcard-btn">
          Go somewhere
        </Button>
      </Card>
    </div>
  );
};
export default SpCard;
