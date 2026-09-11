import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code2, Database, Coffee, ArrowRight, CheckCircle2, ChevronRight, Hash, Layers, ListOrdered, Shuffle, GitCommit } from 'lucide-react';

const CodeBlock = ({ code, language = 'java' }: { code: string; language?: string }) => (
  <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl my-6">
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{ margin: 0, padding: '1.5rem', background: '#0f172a', fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

const FeatureList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-4 my-6 text-xl md:text-2xl text-slate-300">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <CheckCircle2 className="w-6 h-6 mr-4 text-java-orange shrink-0 mt-1" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ComparisonTable = ({ headers, rows }: { headers: string[], rows: (string|React.ReactNode)[][] }) => (
  <div className="overflow-hidden rounded-xl border border-slate-700 my-8 shadow-xl">
    <table className="w-full text-left text-lg md:text-xl">
      <thead className="bg-slate-800 text-slate-200 uppercase tracking-wider text-sm font-semibold">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-6 py-4">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-slate-900/50 divide-y divide-slate-800 text-slate-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-slate-800/50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`px-6 py-4 ${j===0 ? 'font-medium text-slate-100' : ''}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SlideTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-10">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50 flex items-center gap-4">
      <Coffee className="text-java-orange w-10 h-10 shrink-0" />
      {children}
    </h2>
    {subtitle && <p className="text-xl md:text-2xl text-slate-400 mt-4 font-light">{subtitle}</p>}
  </div>
);

export const slides = [
  // SECTION 1
  (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-java-orange to-java-blue opacity-30 blur-2xl rounded-full"></div>
        <Coffee className="w-32 h-32 text-java-orange relative z-10 mx-auto" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
        Structures de Données en <span className="java-gradient-text">Java</span>
      </h1>
      <p className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide">
        Organiser <span className="text-java-blue px-2">&bull;</span> 
        Stocker <span className="text-java-blue px-2">&bull;</span> 
        Accéder <span className="text-java-blue px-2">&bull;</span> 
        Rechercher <span className="text-java-blue px-2">&bull;</span> 
        Optimiser
      </p>
    </div>
  ),
  (
    <div className="slide-content">
      <SlideTitle>Qu'est-ce qu'une Structure de Données ?</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center flex-1">
        <div>
          <FeatureList items={[
            <><strong className="text-white">Définition :</strong> Un format spécialisé pour organiser, traiter, récupérer et stocker des données.</>,
            <><strong className="text-white">Pourquoi ?</strong> Les données ont besoin de structure pour être utiles. De bonnes structures rendent les algorithmes plus rapides.</>,
            <><strong className="text-white">Impact :</strong> Choisir la bonne structure affecte considérablement les performances de la mémoire et du processeur.</>,
            <><strong className="text-white">Analogie :</strong> Un tiroir en désordre vs un classeur de bureau bien organisé.</>
          ]} />
        </div>
        <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-2xl text-slate-300 font-mono">
            <span className="px-4 py-2 bg-slate-700 rounded-lg text-white">Données</span>
            <ArrowRight className="text-java-orange" />
            <span className="px-4 py-2 bg-slate-700 rounded-lg text-white">Structure</span>
            <ArrowRight className="text-java-orange" />
            <span className="px-4 py-2 bg-slate-700 rounded-lg text-white">Opérations</span>
            <ArrowRight className="text-java-orange" />
            <span className="px-4 py-2 bg-java-blue font-bold text-white rounded-lg shadow-lg shadow-java-blue/20">Résultat</span>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide-content">
      <SlideTitle subtitle="Comment Java organise les collections">Catégories Principales</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-java-blue/50 transition-colors">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-800">
            <ListOrdered className="w-10 h-10 text-java-blue" />
            <h3 className="text-3xl font-bold text-slate-100">Structures Linéaires</h3>
          </div>
          <ul className="space-y-4 text-2xl text-slate-300 font-mono">
            <li className="flex items-center gap-3"><ChevronRight className="text-java-blue" /> Array</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-blue" /> ArrayList</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-blue" /> LinkedList</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-blue" /> Stack</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-blue" /> Queue</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-java-orange/50 transition-colors">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-800">
            <Database className="w-10 h-10 text-java-orange" />
            <h3 className="text-3xl font-bold text-slate-100">Structures Associatives</h3>
          </div>
          <ul className="space-y-4 text-2xl text-slate-300 font-mono">
            <li className="flex items-center gap-3"><ChevronRight className="text-java-orange" /> HashMap</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-orange" /> TreeMap</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-orange" /> HashSet</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-java-orange" /> TreeSet</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  
  // SECTION 2 - Linear
  (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-slate-900">
      <ListOrdered className="w-24 h-24 text-java-blue opacity-50" />
      <h2 className="text-5xl text-java-blue font-bold tracking-widest uppercase">Section 2</h2>
      <h1 className="text-6xl font-bold text-white">Structures Linéaires</h1>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="La structure fondamentale à mémoire contiguë">Tableaux (Arrays)</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Taille fixe (ne peut ni grandir ni rétrécir)",
            "Contient des éléments du même type",
            "Accès par index (commence à 0)",
            <><strong className="text-white text-java-orange">Temps d'accès O(1)</strong> - extrêmement rapide car l'adresse mémoire est calculée mathématiquement.</>
          ]} />
        </div>
        <div>
          <CodeBlock code={`String[] names = {"Aziz", "Omar", "Sara"};\n\nSystem.out.println(names[1]); // Affiche: Omar`} />
          <div className="mt-8 flex justify-center gap-2 font-mono text-xl">
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 border border-slate-600 px-6 py-4 rounded-t-lg text-white">[ Aziz ]</div>
              <div className="bg-slate-900 w-full text-center py-2 text-slate-400 text-sm border border-t-0 border-slate-700 rounded-b-lg">0</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 border border-slate-600 px-6 py-4 rounded-t-lg text-java-orange font-bold shadow-[0_0_15px_rgba(248,152,29,0.3)]">[ Omar ]</div>
              <div className="bg-slate-900 w-full text-center py-2 text-java-orange text-sm border border-t-0 border-slate-700 rounded-b-lg">1</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 border border-slate-600 px-6 py-4 rounded-t-lg text-white">[ Sara ]</div>
              <div className="bg-slate-900 w-full text-center py-2 text-slate-400 text-sm border border-t-0 border-slate-700 rounded-b-lg">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Profil de performance des tableaux bruts">Opérations sur les Tableaux</SlideTitle>
      <FeatureList items={[
        "L'accès par index est instantané.",
        "La recherche nécessite de vérifier chaque élément (sauf s'il est trié).",
        "La mise à jour d'un élément à un index connu est instantanée.",
        "L'insertion ou la suppression d'éléments est très limitée car la taille est fixe."
      ]} />
      <div className="mt-4">
        <ComparisonTable 
          headers={['Opération', 'Complexité', 'Description']}
          rows={[
            ['Accès (Index)', <strong className="text-green-400">O(1)</strong>, 'Calcule l\'adresse mémoire directement'],
            ['Recherche (Valeur)', <strong className="text-orange-400">O(n)</strong>, 'Doit parcourir du début à la fin'],
            ['Mise à jour (Index)', <strong className="text-green-400">O(1)</strong>, 'Écrase la valeur à l\'adresse mémoire'],
            ['Insertion/Suppression', <strong className="text-red-400">—</strong>, 'Non pris en charge sans créer un nouveau tableau'],
          ]}
        />
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="L'enveloppe de tableau dynamique">ArrayList</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Taille dynamique — grandit automatiquement quand il est plein",
            "Basé en interne sur un tableau standard",
            "Autorise les valeurs en double",
            "Accès par index (tout comme un tableau)"
          ]} />
          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl mt-6">
            <p className="text-lg text-slate-300">
              <strong className="text-white">Comment il grandit :</strong> Lorsque le tableau interne est plein, Java crée un nouveau tableau (généralement 1,5x plus grand), copie les anciens éléments et supprime l'ancien.
            </p>
          </div>
        </div>
        <div>
          <CodeBlock code={`ArrayList<String> names = new ArrayList<>();\n\nnames.add("Aziz");\nnames.add("Omar");\nnames.add("Sara");\n\nSystem.out.println(names.get(0)); // Affiche: Aziz`} />
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Travailler avec des listes dynamiques">Opérations sur ArrayList</SlideTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <CodeBlock code={`names.add("Ali");    // Ajoute à la fin\nnames.get(2);        // Accède à l'index 2\nnames.remove(0);     // Supprime à l'index 0\nnames.contains("X"); // Vérifie l'existence\nnames.size();        // Obtient la taille`} />
        </div>
        <div>
          <div className="space-y-6 mt-6">
            <div className="p-4 border-l-4 border-green-500 bg-green-500/10 rounded-r-lg">
              <h4 className="font-bold text-green-400 text-xl mb-1">Ajouter à la fin</h4>
              <p className="text-slate-300">Très rapide. <strong className="text-white">O(1)</strong> amorti.</p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg">
              <h4 className="font-bold text-orange-400 text-xl mb-1">Insérer au milieu</h4>
              <p className="text-slate-300">Plus lent <strong className="text-white">O(n)</strong>. Nécessite de décaler tous les éléments suivants vers la droite.</p>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-red-500/10 rounded-r-lg">
              <h4 className="font-bold text-red-400 text-xl mb-1">Supprimer au milieu</h4>
              <p className="text-slate-300">Plus lent <strong className="text-white">O(n)</strong>. Nécessite de décaler tous les éléments suivants vers la gauche.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Nœuds chaînés ensemble en mémoire">LinkedList (Liste Chaînée)</SlideTitle>
      <div className="grid md:grid-cols-[1fr_400px] gap-12">
        <div>
          <FeatureList items={[
            "Les données sont stockées dans des objets indépendants appelés Nœuds",
            "Les nœuds sont dispersés en mémoire, reliés par des pointeurs",
            "La LinkedList de Java est doublement chaînée (liens Suivant et Précédent)",
            "Excellent pour ajouter/supprimer aux extrémités"
          ]} />
          <CodeBlock code={`LinkedList<String> list = new LinkedList<>();\nlist.add("A");\nlist.addFirst("Début");\nlist.addLast("Fin");`} />
        </div>
        <div className="flex flex-col gap-6 justify-center mt-8">
          {[ 'A', 'B', 'C' ].map((letter, i) => (
            <div key={i} className="flex items-center">
              <div className="bg-slate-800 border border-java-blue rounded-xl p-4 flex gap-4 w-full shadow-lg relative">
                <div className="text-xs text-slate-500 absolute -top-3 left-4 bg-slate-950 px-1 font-mono">Nœud</div>
                <div className="bg-slate-900 border border-slate-700 px-2 py-3 rounded text-xs text-slate-400 w-1/4 text-center leading-tight">Lien<br/>Préc</div>
                <div className="bg-java-blue/20 border border-java-blue text-white font-bold text-xl rounded flex-1 flex items-center justify-center">{letter}</div>
                <div className="bg-slate-900 border border-slate-700 px-2 py-3 rounded text-xs text-slate-400 w-1/4 text-center leading-tight">Lien<br/>Suiv</div>
              </div>
              {i < 2 && <ArrowRight className="text-java-blue mx-2 w-8 h-8 shrink-0 rotate-90 md:rotate-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Choisir la bonne liste">ArrayList vs LinkedList</SlideTitle>
      <ComparisonTable 
        headers={['Caractéristique', 'ArrayList', 'LinkedList']}
        rows={[
          ['Structure interne', 'Tableau Dynamique', 'Nœuds Doublement Chaînés'],
          ['Accès par index', <strong className="text-green-400">O(1) - Rapide</strong>, <strong className="text-red-400">O(n) - Lent</strong>],
          ['Recherche (par valeur)', 'O(n)', 'O(n)'],
          ['Insérer/Supprimer aux bouts', 'Bon (O(1) amorti)', <strong className="text-green-400">Très Bon O(1)</strong>],
          ['Surcharge mémoire', <strong className="text-green-400">Faible</strong>, <strong className="text-red-400">Élevée (liens des nœuds)</strong>],
          ['Cas d\'utilisation typique', 'Listes générales, beaucoup de lectures', 'Opérations d\'ajout/suppression fréquentes'],
        ]}
      />
      <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700 text-center text-xl text-slate-200">
        <strong className="text-java-orange">Astuce de Pro :</strong> <code className="bg-slate-950 px-2 py-1 rounded text-java-orange">ArrayList</code> est le choix par défaut dans 95% des cas en raison de la localité du cache CPU et de la faible mémoire.
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="LIFO — Dernier Entré, Premier Sorti">Stack (Pile)</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Suit le principe LIFO (Last In, First Out).",
            "Comme une pile d'assiettes : on ajoute au sommet et on retire du sommet.",
            <><strong className="text-white">Push :</strong> Ajoute un élément au sommet</>,
            <><strong className="text-white">Pop :</strong> Retire l'élément du sommet</>,
            <><strong className="text-white">Peek :</strong> Voit l'élément au sommet sans le retirer</>
          ]} />
          <CodeBlock code={`Deque<String> stack = new ArrayDeque<>();\n\nstack.push("A");\nstack.push("B");\nstack.push("C");\n\nstack.pop(); // Retourne "C"`} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-64 border-b-4 border-l-4 border-r-4 border-slate-600 rounded-b-xl flex flex-col-reverse p-4 gap-2 relative bg-slate-900/50">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col animate-bounce">
              <span className="text-java-orange font-bold mb-1">push() / pop()</span>
              <ArrowRight className="text-java-orange rotate-90 w-6 h-6" />
            </div>
            <div className="bg-slate-700 border border-slate-500 rounded p-4 text-center font-bold text-xl">Assiette A</div>
            <div className="bg-slate-600 border border-slate-400 rounded p-4 text-center font-bold text-xl">Assiette B</div>
            <div className="bg-java-orange border border-orange-300 rounded p-4 text-center font-bold text-black shadow-[0_0_15px_rgba(248,152,29,0.5)]">Assiette C (Sommet)</div>
          </div>
          <div className="mt-8 text-slate-400 text-lg space-y-1 text-center">
            <p><strong>Cas concrets :</strong></p>
            <p>Fonctionnalités d'annulation (Undo)</p>
            <p>Historique du navigateur (Bouton Retour)</p>
            <p>Pile d'appels de fonctions (Call stack)</p>
          </div>
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="FIFO — Premier Entré, Premier Sorti">Queue (File d'attente)</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Suit le principe FIFO (First In, First Out).",
            "Comme une file d'attente : la première personne arrivée est servie en premier.",
            <><strong className="text-white">Offer :</strong> Ajoute à l'arrière de la file</>,
            <><strong className="text-white">Poll :</strong> Retire de l'avant de la file</>,
            <><strong className="text-white">Peek :</strong> Voit l'élément à l'avant</>
          ]} />
          <CodeBlock code={`Queue<String> q = new ArrayDeque<>();\n\nq.offer("Ahmed");\nq.offer("Omar");\nq.offer("Aziz");\n\nq.poll(); // Retourne "Ahmed"`} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center w-full max-w-lg mx-auto bg-slate-900 border border-slate-700 rounded-full p-2 py-4 relative">
            <div className="absolute -left-20 text-green-400 font-bold flex flex-col items-center">
              <span>poll()</span>
              <ArrowRight className="w-6 h-6" />
            </div>
            
            <div className="flex flex-row-reverse w-full justify-around gap-2 px-4">
              <div className="bg-java-blue text-white rounded-full px-6 py-3 font-bold">Ahmed</div>
              <div className="bg-slate-700 text-slate-200 rounded-full px-6 py-3">Omar</div>
              <div className="bg-slate-800 text-slate-400 rounded-full px-6 py-3">Aziz</div>
            </div>

            <div className="absolute -right-20 text-java-orange font-bold flex flex-col items-center">
              <span>offer()</span>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
          
          <div className="mt-12 text-slate-400 text-lg space-y-1 text-center">
            <p><strong>Cas concrets :</strong></p>
            <p>Files d'attente de clients</p>
            <p>Files d'attente d'impression</p>
            <p>Traitement des requêtes de serveur web</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // SECTION 3 - Associative
  (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-slate-900">
      <Database className="w-24 h-24 text-java-orange opacity-50" />
      <h2 className="text-5xl text-java-orange font-bold tracking-widest uppercase">Section 3</h2>
      <h1 className="text-6xl font-bold text-white">Structures Associatives</h1>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Le paradigme Map">Concept Clé → Valeur</SlideTitle>
      <div className="flex flex-col items-center justify-center flex-1 space-y-12">
        <div className="flex items-center gap-6 text-4xl font-mono font-bold bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
          <span className="text-java-blue px-6 py-4 bg-slate-900 rounded-xl shadow-inner">CLÉ</span>
          <ArrowRight className="w-12 h-12 text-java-orange" />
          <span className="text-white px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl shadow-lg">VALEUR</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-slate-400 mb-2 font-mono">email</div>
            <ArrowRight className="w-6 h-6 mx-auto text-slate-500 mb-2" />
            <div className="text-white font-bold text-xl">Objet Utilisateur</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-slate-400 mb-2 font-mono">studentId</div>
            <ArrowRight className="w-6 h-6 mx-auto text-slate-500 mb-2" />
            <div className="text-white font-bold text-xl">Nom de l'Étudiant</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-slate-400 mb-2 font-mono">codePays</div>
            <ArrowRight className="w-6 h-6 mx-auto text-slate-500 mb-2" />
            <div className="text-white font-bold text-xl">Données du Pays</div>
          </div>
        </div>
        
        <p className="text-2xl text-slate-300 max-w-3xl text-center leading-relaxed">
          Les Maps sont incroyablement puissantes lorsque vous avez un <strong className="text-java-orange">identifiant</strong> (la clé) et que vous souhaitez trouver instantanément ses <strong className="text-white">données</strong> associées (la valeur).
        </p>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Le stockage clé-valeur par défaut">HashMap</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Stocke des correspondances de clés vers des valeurs",
            <><strong className="text-white text-java-orange">Les clés sont uniques</strong> (l'ajout d'un doublon écrase l'ancienne valeur)</>,
            "Les valeurs peuvent être dupliquées",
            "Temps de recherche moyen extrêmement rapide O(1)",
            "Ne garantit AUCUN ordre spécifique des clés"
          ]} />
        </div>
        <div>
          <CodeBlock code={`Map<String, Integer> ages = new HashMap<>();\n\nages.put("Aziz", 23);\nages.put("Omar", 22);\n\nSystem.out.println(ages.get("Aziz")); // 23`} />
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mt-6 font-mono text-xl space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-java-blue px-3 py-1 rounded">"Aziz"</span>
              <ArrowRight className="text-slate-500 w-5 h-5" />
              <span className="text-white font-bold">23</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-java-blue px-3 py-1 rounded">"Omar"</span>
              <ArrowRight className="text-slate-500 w-5 h-5" />
              <span className="text-white font-bold">22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Travailler avec les Maps">Opérations sur HashMap</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <CodeBlock code={`map.put(key, val);        // Insérer/MàJ\nmap.get(key);             // Récupérer\nmap.remove(key);          // Supprimer\nmap.containsKey(key);     // Vérifier clé\nmap.containsValue(val);   // Vérifier valeur (lent)\nmap.getOrDefault(k, def); // Récupération sûre`} />
        
        <div className="space-y-6 mt-6">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="text-2xl font-bold text-white mb-4">Complexité Moyenne</h4>
            <ul className="space-y-4 text-xl">
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Recherche par Clé</span>
                <span className="font-mono text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded">O(1)</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Insertion</span>
                <span className="font-mono text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded">O(1)</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="text-slate-300">Suppression</span>
                <span className="font-mono text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded">O(1)</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-400 italic text-sm text-center">
            * Note : Ce sont des complexités moyennes/attendues. Dans les pires scénarios (collisions de hachage), cela se dégrade, mais Java gère cela efficacement en interne.
          </p>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Clé-Valeur avec tri automatique">TreeMap</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Stocke des correspondances Clé → Valeur",
            <><strong className="text-white text-java-orange">Les clés sont automatiquement triées</strong> dans l'ordre naturel (ou via un Comparator)</>,
            "Basé en interne sur un Arbre Rouge-Noir (Red-Black Tree)",
            "Légèrement plus lent que HashMap pour les opérations de base (O(log n))"
          ]} />
        </div>
        <div>
          <CodeBlock code={`TreeMap<Integer, String> students = new TreeMap<>();\n\nstudents.put(30, "Aziz");\nstudents.put(10, "Omar");\nstudents.put(20, "Sara");\n\n// Les clés sont automatiquement triées !`} />
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mt-6 font-mono text-xl space-y-4 relative">
            <div className="absolute right-4 top-4 text-java-orange text-sm flex items-center gap-1">
              <ListOrdered className="w-4 h-4" /> Trié
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="bg-slate-800 text-java-blue px-3 py-1 rounded w-12 text-center">10</span>
              <ArrowRight className="text-slate-500 w-5 h-5" />
              <span className="text-white font-bold">"Omar"</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-java-blue px-3 py-1 rounded w-12 text-center">20</span>
              <ArrowRight className="text-slate-500 w-5 h-5" />
              <span className="text-white font-bold">"Sara"</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-java-blue px-3 py-1 rounded w-12 text-center">30</span>
              <ArrowRight className="text-slate-500 w-5 h-5" />
              <span className="text-white font-bold">"Aziz"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  
  (
    <div className="slide-content">
      <SlideTitle subtitle="Collections uniques">HashSet</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Stocke des valeurs (pas des paires clé-valeur)",
            <><strong className="text-white text-java-orange">Aucun doublon autorisé</strong></>,
            "Temps de recherche moyen rapide O(1)",
            "Aucun tri ou ordre garanti",
            "Sous le capot, c'est juste un HashMap où les valeurs sont factices."
          ]} />
        </div>
        <div>
          <CodeBlock code={`Set<String> names = new HashSet<>();\n\nnames.add("Aziz");\nnames.add("Omar");\nnames.add("Aziz"); // Doublon ignoré\n\nSystem.out.println(names.size()); // 2`} />
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mt-6 flex gap-4 justify-center text-xl font-mono text-white">
            <span className="px-4 py-2 bg-slate-800 rounded shadow-md border border-slate-700">"Omar"</span>
            <span className="px-4 py-2 bg-java-blue/20 text-java-blue border border-java-blue rounded shadow-md">"Aziz"</span>
            <span className="px-4 py-2 opacity-30 line-through text-red-400">"Aziz"</span>
          </div>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Unique et trié">TreeSet</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FeatureList items={[
            "Stocke des valeurs (sans doublons)",
            <><strong className="text-white text-java-orange">Automatiquement trié</strong> dans l'ordre naturel</>,
            "Les opérations sont généralement O(log n)",
            "Utile quand vous avez besoin d'unicité ET d'itération ordonnée"
          ]} />
        </div>
        <div>
          <CodeBlock code={`Set<Integer> numbers = new TreeSet<>();\n\nnumbers.add(50);\nnumbers.add(10);\nnumbers.add(30);\nnumbers.add(10); // Ignoré`} />
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mt-6 relative">
            <div className="absolute right-4 top-4 text-java-orange text-sm flex items-center gap-1">
              <ListOrdered className="w-4 h-4" /> Résultat Trié
            </div>
            <div className="flex gap-4 justify-center text-2xl font-mono text-white mt-4">
              <span className="px-4 py-2 bg-slate-800 rounded border border-slate-700">10</span>
              <span className="text-slate-600 self-center">,</span>
              <span className="px-4 py-2 bg-slate-800 rounded border border-slate-700">30</span>
              <span className="text-slate-600 self-center">,</span>
              <span className="px-4 py-2 bg-slate-800 rounded border border-slate-700">50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Ensembles côte à côte">HashSet vs TreeSet</SlideTitle>
      <ComparisonTable 
        headers={['Caractéristique', 'HashSet', 'TreeSet']}
        rows={[
          ['Doublons Autorisés', 'Non', 'Non'],
          ['Automatiquement Trié', <strong className="text-red-400">Non</strong>, <strong className="text-green-400">Oui</strong>],
          ['Recherche', <strong className="text-green-400">Moyenne O(1)</strong>, 'O(log n)'],
          ['Insertion', <strong className="text-green-400">Moyenne O(1)</strong>, 'O(log n)'],
          ['Avantage Principal', <strong className="text-java-blue">Vitesse Brute</strong>, <strong className="text-java-orange">Tri / Ordre</strong>],
        ]}
      />
    </div>
  ),

  // SECTION 4 - Choosing
  (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-slate-900">
      <Shuffle className="w-24 h-24 text-white opacity-50" />
      <h2 className="text-5xl text-white font-bold tracking-widest uppercase">Section 4</h2>
      <h1 className="text-6xl font-bold text-java-orange">Choisir la Bonne Structure</h1>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Maps côte à côte">HashMap vs TreeMap</SlideTitle>
      <ComparisonTable 
        headers={['Caractéristique', 'HashMap', 'TreeMap']}
        rows={[
          ['Paire Clé → Valeur', 'Oui', 'Oui'],
          ['Clés triées', <strong className="text-red-400">Non</strong>, <strong className="text-green-400">Oui</strong>],
          ['Recherche', <strong className="text-green-400">Moyenne O(1)</strong>, 'O(log n)'],
          ['Insertion', <strong className="text-green-400">Moyenne O(1)</strong>, 'O(log n)'],
          ['Idéal pour...', <strong className="text-white">Recherches directes et rapides</strong>, <strong className="text-white">Données ordonnées / plages</strong>],
        ]}
      />
      <div className="mt-8 flex justify-center gap-12 text-2xl">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
          <span className="block text-slate-400 text-lg mb-2">Besoin de vitesse brute ?</span>
          <strong className="text-java-blue flex items-center gap-2"><ArrowRight className="w-5 h-5"/> HashMap</strong>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
          <span className="block text-slate-400 text-lg mb-2">Besoin de clés triées ?</span>
          <strong className="text-java-orange flex items-center gap-2"><ArrowRight className="w-5 h-5"/> TreeMap</strong>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Arbre de décision">Comment Choisir ?</SlideTitle>
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl overflow-y-auto font-mono max-w-4xl mx-auto w-full text-lg">
        <div className="pl-0 border-l-2 border-slate-700 space-y-4">
          <div className="relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-java-orange rounded-full"></div>
            <strong className="text-white pl-4">Ai-je besoin d'une correspondance Clé → Valeur ?</strong>
            <div className="pl-8 text-slate-400 mt-2 space-y-2 border-l border-slate-700 ml-4 pb-4">
              <p>Oui → <strong className="text-java-blue">Utiliser une Map</strong></p>
              <div className="pl-4">
                <p>↳ Les clés doivent-elles être triées ?</p>
                <p className="pl-4">Oui → <strong className="text-white bg-slate-800 px-2 rounded">TreeMap</strong></p>
                <p className="pl-4">Non  → <strong className="text-white bg-slate-800 px-2 rounded">HashMap</strong></p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-java-orange rounded-full"></div>
            <strong className="text-white pl-4">Ai-je juste besoin d'éléments uniques ?</strong>
            <div className="pl-8 text-slate-400 mt-2 space-y-2 border-l border-slate-700 ml-4 pb-4">
              <p>Oui → <strong className="text-java-blue">Utiliser un Set</strong></p>
              <div className="pl-4">
                <p>↳ Doivent-ils être triés ?</p>
                <p className="pl-4">Oui → <strong className="text-white bg-slate-800 px-2 rounded">TreeSet</strong></p>
                <p className="pl-4">Non  → <strong className="text-white bg-slate-800 px-2 rounded">HashSet</strong></p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-java-orange rounded-full"></div>
            <strong className="text-white pl-4">Besoin d'un ordre spécifique ?</strong>
            <div className="pl-8 text-slate-400 mt-2 space-y-2 border-l border-slate-700 ml-4 pb-4">
              <p>FIFO (Premier Entré, Premier Sorti) → <strong className="text-white bg-slate-800 px-2 rounded">Queue / ArrayDeque</strong></p>
              <p>LIFO (Dernier Entré, Premier Sorti) → <strong className="text-white bg-slate-800 px-2 rounded">Stack / Deque</strong></p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-java-orange rounded-full"></div>
            <strong className="text-white pl-4">Juste besoin d'une liste standard d'éléments ?</strong>
            <div className="pl-8 text-slate-400 mt-2 ml-4">
              <p>→ <strong className="text-white bg-java-blue/20 text-java-blue border border-java-blue px-2 py-1 rounded">ArrayList</strong> (Choix par Défaut)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Scénario d'architecture d'application">Exemple Concret : Réservation d'Hôtel</SlideTitle>
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 max-w-3xl mx-auto shadow-2xl font-mono">
        <ul className="space-y-6">
          <li className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-slate-300 text-xl">Toutes les chambres de l'hôtel</span>
            <span className="text-java-blue bg-slate-800 px-3 py-1 rounded">ArrayList&lt;Room&gt;</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-slate-300 text-xl">Numéros uniques des chambres réservées</span>
            <span className="text-java-orange bg-slate-800 px-3 py-1 rounded">HashSet&lt;String&gt;</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-slate-300 text-xl">Recherche ID Chambre → Objet Chambre</span>
            <span className="text-green-400 bg-slate-800 px-3 py-1 rounded">HashMap&lt;String, Room&gt;</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-slate-300 text-xl">Numéros des chambres disponibles triés</span>
            <span className="text-yellow-400 bg-slate-800 px-3 py-1 rounded">TreeSet&lt;Integer&gt;</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-slate-300 text-xl">File d'attente pour les annulations</span>
            <span className="text-pink-400 bg-slate-800 px-3 py-1 rounded">Queue&lt;Customer&gt;</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-slate-300 text-xl">Annuler la dernière réservation</span>
            <span className="text-purple-400 bg-slate-800 px-3 py-1 rounded">Deque&lt;Action&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  ),

  // SECTION 5 - Performance
  (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-slate-900">
      <GitCommit className="w-24 h-24 text-green-400 opacity-50" />
      <h2 className="text-5xl text-green-400 font-bold tracking-widest uppercase">Section 5</h2>
      <h1 className="text-6xl font-bold text-white">Performance & Big O</h1>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Mesurer l'efficacité algorithmique">Notation Big O</SlideTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-slate-900 border-t-4 border-t-green-400 p-8 rounded-b-xl rounded-t shadow-xl">
          <h3 className="text-4xl font-bold font-mono text-green-400 mb-4">O(1)</h3>
          <h4 className="text-xl font-bold text-white mb-2">Temps Constant</h4>
          <p className="text-slate-400">Très rapide. Indépendant de la taille de la collection.</p>
          <div className="mt-6 h-24 flex items-end">
            <div className="w-full h-4 bg-green-400/20 relative">
              <div className="absolute inset-y-0 left-0 bg-green-400 w-full rounded-sm"></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Temps d'exécution plat, peu importe la taille des données.</p>
        </div>
        
        <div className="bg-slate-900 border-t-4 border-t-yellow-400 p-8 rounded-b-xl rounded-t shadow-xl">
          <h3 className="text-4xl font-bold font-mono text-yellow-400 mb-4">O(log n)</h3>
          <h4 className="text-xl font-bold text-white mb-2">Temps Logarithmique</h4>
          <p className="text-slate-400">Très efficace. Réduit l'espace de recherche de moitié à chaque étape.</p>
          <div className="mt-6 h-24 relative overflow-hidden flex items-end">
             <svg viewBox="0 0 100 100" className="w-full h-full stroke-yellow-400 fill-none" preserveAspectRatio="none">
               <path d="M 0,100 Q 20,20 100,10" strokeWidth="4" />
             </svg>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Croissance lente avec l'augmentation des données.</p>
        </div>

        <div className="bg-slate-900 border-t-4 border-t-red-400 p-8 rounded-b-xl rounded-t shadow-xl">
          <h3 className="text-4xl font-bold font-mono text-red-400 mb-4">O(n)</h3>
          <h4 className="text-xl font-bold text-white mb-2">Temps Linéaire</h4>
          <p className="text-slate-400">Plus d'éléments = proportionnellement plus de travail requis.</p>
          <div className="mt-6 h-24 relative overflow-hidden">
             <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-400 fill-none" preserveAspectRatio="none">
               <line x1="0" y1="100" x2="100" y2="0" strokeWidth="4" />
             </svg>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Le temps d'exécution croît linéairement avec les données.</p>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="L'aide-mémoire ultime">Comparaison de Complexité</SlideTitle>
      <ComparisonTable 
        headers={['Structure', 'Accès (Index)', 'Recherche', 'Insertion', 'Suppression']}
        rows={[
          ['Array (Tableau)', <span className="text-green-400 font-mono">O(1)</span>, <span className="text-red-400 font-mono">O(n)</span>, '—', '—'],
          ['ArrayList', <span className="text-green-400 font-mono">O(1)</span>, <span className="text-red-400 font-mono">O(n)</span>, <span className="text-green-400 font-mono">O(1)*</span>, <span className="text-red-400 font-mono">O(n)</span>],
          ['LinkedList', <span className="text-red-400 font-mono">O(n)</span>, <span className="text-red-400 font-mono">O(n)</span>, <span className="text-green-400 font-mono">O(1)**</span>, <span className="text-green-400 font-mono">O(1)**</span>],
          ['HashSet/Map', '—', <span className="text-green-400 font-mono">Moy. O(1)</span>, <span className="text-green-400 font-mono">Moy. O(1)</span>, <span className="text-green-400 font-mono">Moy. O(1)</span>],
          ['TreeSet/Map', '—', <span className="text-yellow-400 font-mono">O(log n)</span>, <span className="text-yellow-400 font-mono">O(log n)</span>, <span className="text-yellow-400 font-mono">O(log n)</span>],
        ]}
      />
      <div className="mt-4 space-y-2 text-slate-400 text-sm">
        <p><strong className="text-white">*</strong> L'ajout <code className="bg-slate-800 px-1 rounded">add()</code> à la fin d'une ArrayList est O(1) amorti. L'insertion au milieu est O(n).</p>
        <p><strong className="text-white">**</strong> L'insertion/suppression dans une LinkedList est O(1) <em className="text-slate-300">uniquement si</em> l'itérateur/référence est déjà à la bonne position.</p>
      </div>
    </div>
  ),

  (
    <div className="slide-content">
      <SlideTitle subtitle="Modèles mentaux pour les collections Java">Vue d'Ensemble</SlideTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base font-mono">
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
          <div className="font-bold text-white mb-2 text-lg">Array</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-java-orange">Taille fixe<br/>Accès par index</div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
          <div className="font-bold text-white mb-2 text-lg">ArrayList</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-java-blue">Liste dynamique<br/>Index rapide</div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
          <div className="font-bold text-white mb-2 text-lg">LinkedList</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-green-400">Nœuds chaînés<br/>Extrémités rapides</div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
          <div className="font-bold text-white mb-2 text-lg">Stack / Queue</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-purple-400">LIFO / FIFO<br/>Ordre strict</div>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-inner">
          <div className="font-bold text-white mb-2 text-lg">HashSet</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-red-400">Unique<br/>Rapide O(1)</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-inner">
          <div className="font-bold text-white mb-2 text-lg">TreeSet</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-yellow-400">Unique<br/>Trié</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-inner">
          <div className="font-bold text-white mb-2 text-lg">HashMap</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-pink-400">Clé → Valeur<br/>Rapide O(1)</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-inner">
          <div className="font-bold text-white mb-2 text-lg">TreeMap</div>
          <ArrowRight className="w-4 h-4 mx-auto rotate-90 text-slate-500 my-2" />
          <div className="text-teal-400">Clé → Valeur<br/>Trié</div>
        </div>
      </div>
    </div>
  ),

  (
    <div className="slide-content text-center">
      <SlideTitle subtitle="Résumé">Points Clés</SlideTitle>
      
      <div className="grid md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto w-full font-mono text-sm md:text-lg">
        <div className="space-y-3">
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">1.</strong> Pas de "meilleure" structure absolue.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">2.</strong> Choisissez selon les opérations fréquentes.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300 border-l-4 border-java-blue"><strong className="text-java-blue">ArrayList</strong> est un excellent choix par défaut.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">HashSet</strong> est utile pour les éléments uniques.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">TreeSet</strong> est utile pour unique + trié.</div>
        </div>
        <div className="space-y-3">
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300 border-l-4 border-java-orange"><strong className="text-java-orange">HashMap</strong> pour une recherche rapide clé → valeur.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">TreeMap</strong> pour une recherche clé → valeur triée.</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">Stack</strong> = Dernier Entré, Premier Sorti (LIFO).</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">Queue</strong> = Premier Entré, Premier Sorti (FIFO).</div>
          <div className="bg-slate-800 px-4 py-3 rounded text-slate-300"><strong className="text-white">Big O</strong> aide à comparer les performances.</div>
        </div>
      </div>
      
      <div className="mt-12 max-w-4xl mx-auto p-6 bg-gradient-to-r from-java-darkblue to-slate-900 border border-java-blue/30 rounded-xl shadow-[0_0_30px_rgba(83,130,161,0.2)]">
        <p className="text-2xl md:text-3xl text-white font-light italic">
          "La bonne structure de données peut rendre votre code plus <strong className="text-java-orange font-bold">simple</strong>, plus <strong className="text-java-blue font-bold">rapide</strong> et plus <strong className="text-green-400 font-bold">évolutif</strong>."
        </p>
      </div>
    </div>
  )
];
