# CLAUDE.md — Plan de refactoring Cultydata Studio

## Contexte

Cultydata Studio repositionne son site et son identité.
L'objectif : passer d'un site vitrine classique (agence de consulting tech) à un positionnement de **builder d'organisations augmentées par l'IA agentique**.

**Mot d'ordre** : factuel, court, pertinent. Zéro bullshit. Zéro Lorem ipsum.

---

## Nouveau positionnement

**Cultydata Studio** = Builder qui :
- Conçoit et met en place des **organisations augmentées par l'agentic AI**
- Construit **avec** l'IA (pas seulement sur l'IA)
- Accompagne les clients jusqu'à la **passation complète** : on construit, on transfère, le client a la main

**Tagline proposée** : _"We build AI-augmented organizations. Then we hand you the keys."_

**Ton** : direct, factuel, technique mais accessible. Pas de superlatifs creux ("unmatched", "cutting-edge", "revolutionary"). Des faits, des résultats, des livrables.

---

## Équipe réelle à afficher

| Personne | Rôle | Garder |
|----------|------|--------|
| Mohamed Alaoui | CEO & Founder | Oui — rédiger une vraie bio (remplacer le Lorem ipsum) |
| Mohiddin Shaik (Mo) | CTO — Partner (AppNetWise) | Oui — vrai profil LinkedIn |
| Dawood | Director of Engineering — Partner (AppNetWise) | Oui — vrai profil LinkedIn |
| Dr. Raj Patel | (fictif) | Supprimer |
| Emma Larsson | (fictif) | Supprimer |
| Alex Nguyen x3 | (fictif, dupliqué) | Supprimer |

**Remplacement** : à la place des membres fictifs, afficher une section "Notre approche" expliquant que Cultydata compose des équipes projet avec des **agents IA spécialisés** + experts humains à la demande. C'est cohérent avec le positionnement et honnête.

---

## Phase 1 — Nettoyage & Cohérence (priorité critique)

> Objectif : un site propre, sans contenu factice, cohérent entre EN et FR.

### 1.1 Supprimer tout le contenu placeholder
- [ ] `team.ceo.description` : remplacer le Lorem ipsum par une vraie bio courte (3-4 lignes max)
- [ ] `testimonials.client1.*` : supprimer le témoignage "John Doe" fictif. Soit mettre de vrais retours, soit retirer la section Testimonials entièrement
- [ ] Supprimer les membres d'équipe fictifs (Dr. Raj Patel, Emma Larsson, Alex Nguyen x3)
- [ ] Remplacer tous les liens LinkedIn génériques (`https://www.linkedin.com/`) par les vrais profils ou les retirer

### 1.2 Corriger les incohérences FR/EN
- [ ] Harmoniser "160 Years" (EN) vs "50 ans" (FR) → choisir le vrai chiffre
- [ ] Traduire les clés restées en anglais dans `locales/fr/translations.json` :
  - `team.ceo.subTitle` → "Notre CEO"
  - `team.subTitle` → "Membres de l'équipe"
  - `team.title` → "Notre expertise"
  - `team.description` → traduire
  - `caseStudy.sharedKYC.title` → "Solution KYC partagée"
- [ ] Corriger `"Bien venue chez"` → `"Bienvenue chez"` dans FR

### 1.3 Corriger les données erronées
- [ ] `contactInfo.address` : remplacer "175 5th Ave, NY 10010, Paris" par la vraie adresse (11 Bis Impasse Du Quai Voltaire, 78230 Le Pecq, France)
- [ ] Vérifier la cohérence de toutes les coordonnées de contact

### 1.4 Masquer les sections vides
- [ ] Masquer ou retirer les liens vers Blog, Courses, FAQ s'ils n'ont pas de contenu réel
- [ ] Retirer la page Coming Soon si non pertinente

**Fichiers impactés** :
- `locales/en/translations.json`
- `locales/fr/translations.json`
- Composants React dans `src/components/` (Team, Testimonials, Navbar, Footer)
- `gatsby-node.js` / pages si suppression de routes

---

## Phase 2 — Contraction du contenu & nouveau ton

> Objectif : diviser le volume de texte par 2. Chaque phrase doit apporter une info concrète.

### 2.1 Réécrire la page d'accueil
- [ ] **Banner** : titre court et percutant, centré sur le nouveau positionnement (builder + agentic AI + handover)
- [ ] **About** : 2-3 phrases max. Ce qu'on fait. Pour qui. Comment.
- [ ] **Services** : une phrase par service, pas de paragraphes. Format "Quoi → Pour qui → Résultat"
- [ ] **Engagement Model** : simplifier les 3 modèles en bullet points
- [ ] **Best Practices** : fusionner/réduire à 3 items max au lieu de 5
- [ ] **Process** : garder les 3 étapes mais raccourcir les descriptions (1 phrase chacune)

### 2.2 Réécrire la page About
- [ ] Réécriture complète avec le nouveau positionnement
- [ ] Supprimer les formules vagues ("transforming aspirations", "bridging the gap")
- [ ] Focus sur : ce qu'on livre, comment on travaille, ce qui nous différencie (agentic AI)

### 2.3 Réécrire les pages Services
- [ ] Blockchain : conserver, alléger, ajouter le volet agentic
- [ ] Full-Stack : conserver, alléger
- [ ] Data Science/ML : conserver, alléger
- [ ] Comprehensive Support : **repositionner** comme "Feature Team augmentée par l'IA"

### 2.4 Ajuster le vocabulaire
- Remplacer "cutting-edge" → termes factuels
- Remplacer "unmatched expertise" → résultats concrets
- Remplacer "revolutionary" → ce qui a été livré
- Privilégier : "build", "ship", "deliver", "hand over", "run"

**Fichiers impactés** :
- `locales/en/translations.json` (réécriture massive)
- `locales/fr/translations.json` (réécriture massive)

---

## Phase 3 — Nouveau positionnement "Agentic Builder"

> Objectif : intégrer le positionnement IA agentique dans la structure du site.

### 3.1 Nouvelle section "Notre approche"
- [ ] Créer une section/composant qui explique le modèle :
  - Équipe humaine restreinte (3 experts seniors)
  - Augmentée par des agents IA spécialisés (dev, QA, DevOps, analyse)
  - Organisation agile, pas de bench, pas de sureffectif
- [ ] Remplacer la galerie d'équipe classique par ce modèle

### 3.2 Repositionner les services
- [ ] Ajouter un service ou angle transversal : "AI-Augmented Organization Setup"
  - On aide les clients à mettre en place leurs propres agents IA
  - On structure l'organisation pour intégrer l'agentic dans les workflows
  - On forme et on transfère
- [ ] Mettre à jour les case studies existantes pour mentionner le volet agentic si applicable

### 3.3 Repenser la page Team
- [ ] 3 profils humains réels (Mohamed, Mo, Dawood) avec vraies bios
- [ ] Section "AI Agents" : présenter les agents IA comme des membres de l'équipe
  - Agent Dev, Agent QA, Agent DevSecOps, Agent Data...
  - Design visuel distinctif (icônes, illustrations) pour bien différencier humains/agents
- [ ] Message clé : "Nous sommes peu nombreux. Nos agents multiplient notre capacité."

### 3.4 Call-to-action aligné
- [ ] Reformuler le CTA principal : focus sur "construisons ensemble votre organisation augmentée"
- [ ] Parcours de contact simple et direct

**Fichiers impactés** :
- Nouveaux composants React potentiels
- `locales/en/translations.json` et `locales/fr/translations.json`
- Composants Team, Services, About

---

## Phase 4 — Optimisations techniques & polish

> Objectif : site rapide, propre, prêt pour la production.

### 4.1 Nettoyage technique
- [ ] Supprimer les routes/pages inutilisées (blog, courses, FAQ, coming-soon si vides)
- [ ] Nettoyer les composants React orphelins
- [ ] Supprimer les clés de traduction inutilisées

### 4.2 SEO & meta
- [ ] Mettre à jour les meta descriptions avec le nouveau positionnement
- [ ] Vérifier les balises Open Graph pour le partage social
- [ ] S'assurer que le sitemap est à jour

### 4.3 Performance
- [ ] Vérifier le poids des images
- [ ] S'assurer que le lazy loading fonctionne
- [ ] Auditer avec Lighthouse

---

## Principes de rédaction (à respecter dans toutes les phases)

1. **Court** : si ça tient en une phrase, pas besoin de deux
2. **Factuel** : chiffres, livrables, résultats. Pas d'adjectifs vides
3. **Direct** : sujet-verbe-complément. Voix active
4. **Bilingue** : toute modification EN doit avoir son équivalent FR, et inversement
5. **Honnête** : ne pas afficher ce qui n'existe pas (faux membres, faux témoignages)

---

## Stack technique (rappel)

- **Framework** : Gatsby 5 (React 18)
- **i18n** : i18next (fichiers JSON dans `/locales/{en,fr}/translations.json`)
- **Style** : SCSS + Bootstrap 5
- **Deploy** : GitHub Pages
- **CI** : GitHub Actions (`gatsby.yml`)

---

## Pour démarrer une phase

```bash
# Build local
npm run develop

# Build production
npm run build && npm run serve
```

Toujours vérifier les deux langues (EN/FR) après chaque modification de contenu.
