import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
    <><p>

      <h1>Exercice 3</h1>

      <h2>Consignes :</h2><ul>
        <li> Mettre en forme l&apos;exercice 3</li>
        <li> Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
        <li> Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
          bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.</li>
      </ul> </p><div><form method="post">
        <div className="containers">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Prenom" />
        </div>
        <div>
          <label htmlFor="lname"></label>
          <input type="text" id="lname" name="lname" placeholder="Nom" />
        </div>
        <div>
          <label htmlFor="mail"></label>
          <input type="text" id="mail" name="mail" placeholder="mail" />
          <span id ="abs"> absolue</span>

        </div>
        <div>
          <label htmlFor="pass"></label>
          <input type="password" id="pass" name="pass" placeholder="pass" />
        </div>

        

        <div>
          <label htmlFor="cgu">CGU</label>
          <input type="checkbox" id="cgu" name="cgu" />
        </div>

        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form></div></>
  ) 
}

export default Exercise3
