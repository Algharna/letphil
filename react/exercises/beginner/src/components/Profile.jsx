import Panda from "../assets/panda.png";

const profile = {
  name: "Panda",
  pic: Panda,
  bio: "Panda is very happy. Look at that smile.",
};

function Name() {
  return <h3>Name: {profile.name}</h3>;
}

function Pic() {
  return <img src={profile.pic}></img>;
}

function Bio() {
  return <p>Bio: {profile.bio}</p>;
}

export default function Profile() {
  return (
    <>
      <Name />
      <Pic />
      <Bio />
    </>
  );
}
