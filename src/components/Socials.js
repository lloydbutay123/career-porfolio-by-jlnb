import SocialsLists from "../Helper/Socials";

function Socials() {
  return (
    <section className="socials" id="socials">
      <div className="social-icon">
      {SocialsLists.map((social) => {
        return (
          <a key={social.id} href={social.link} target="_blank">{social.icon}</a>
        )
      })}
      </div>
    </section>
  );
}

export default Socials;
