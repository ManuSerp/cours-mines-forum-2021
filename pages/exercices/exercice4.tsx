import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <><p>
      <h1>Exercice 4</h1>

      Consignes :<ul><li>
        Recopier les exercices 1 et 2 ci-dessous</li>
        <li> Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
          Mobile  </li>
        <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires
        </li></ul></p>
        
        <div className="row"><div className="col-sm-12 col-md-6">
        <table className="table">
          <thead>
            <tr>
              <th>balises</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Balises:</td>
              <td> Content</td>
            </tr>
            <tr>
              <td>&lt;table&gt;</td>
              <td> creer un tableau</td>
            </tr>
            <tr>
              <td>&lt;div&gt;</td>
              <td> organiser la page</td>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td> paragraphes</td>
            </tr>
            <tr>
              <td>&lt;hi&gt;</td>
              <td> titre de niveau i</td>
            </tr>
            <tr>
              <td>&lt;a href=&gt;</td>
              <td>   lien </td>
            </tr>
            <tr>
              <td>&lt;ul&gt;</td>
              <td>   list </td>
            </tr>
            <tr>
              <td>&lt;span&gt;</td>
              <td>   text </td>
            </tr>
            <tr>
              <td>&lt;li&gt;</td>
              <td>   composant list </td>
            </tr>
          </tbody>
        </table>
      </div><div className="col-sm-12 col-md-6"><form method="post">
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
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
      </form></div></div></>
    

  )
}

export default Exercise4
