import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <><p>
      <h1>Exercice 2</h1>

      <h2>Consignes :</h2>

      <ul><li>Mettre en forme l&apos;exercice 2</li>
        <li>Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
          accepter un quelconque règlement et un bouton de validation.</li></ul>
    </p><form method="post">
        <div>
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
      </form></>
  )
}

export default Exercise2
