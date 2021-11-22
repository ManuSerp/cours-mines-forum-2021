import { dirxml } from 'console'
import type { NextPage } from 'next'

const Exercise1: NextPage = () => {
  return (
    <p>
      <h1>Exercice 1</h1>
          <p>
      <h2>Consignes :</h2>
      <ul><li>Mettre en forme l&apos;exercice 1</li>
      <li>En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un tableau avec en-têtes ayant pour colonnes : Balise,
      Contenu. Dans la colonne contenu spécifier la ou les balises qu&apos;il est possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
      (pour les titres par exemple).</li></ul></p>




      <div>
      <table className="table"  >
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
  </div>

      
    </p>
    
  )
}

export default Exercise1
