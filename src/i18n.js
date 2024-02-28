import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        welcome: "Welcome to React",
        login: "Login",
        signup: "Sign up",
        // signin page translations
        enteremail: "Enter your email",
        enterpassword: "Enter your password",
        password: "Password",
        remember: "Remember for 30 days",
        forgot: "Forgot Password",
        signin: "Sign in",
        donthaveanaccount: "Don't have an account? ",
        // signup page translations
        fullname: "Full name*",
        enteryourname: "Enter your name",
        createpassword: "Create a password",
        atleast8characters: "Must be at least 8 characters.",
        confirmpassword: "Confirm Password*",
        confirmpasswordinput: "Confirm password",
        getstarted: "Get started",
        alreadyhaveaccount: "Already have an account? ",
        startcompliance:
          "Start turning non compliance in to compliance into reality.",
        createfreeaccount:
          "Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.",
        companieswhotrust: "1000+ companies who trust ILIR Cyberdefence",
        //add company details page translation
        addcompanydetails: "Add company details",
        companyname: "Company name*",
        enteryourcompanyname: "Enter your company name",
        country: "Country*",
        enteryourcountry: "Enter your country",
        state: "State*",
        enteryourstate: "Enter your state",
        city: "City*",
        enteryourcity: "Enter your city",
        zipcode: "Zipcode*",
        enteryourzipcode: "Enter your zipcode",
        address: "Address*",
        enteryouraddress: "Enter your address",
        continue: "Continue",
        //nav bar translations
        settings: "Settings",
        support: "Support",
        notifications: "Notifications",
        usermanuals: "User manuals",
        comments: "Comments",
        roadmaps: "Roadmaps",
        assessments: "Assessments",
        dashboard: "Dashboard",
        search: "Search",
        //dashboard home page translations
        welcomeolivia: "Welcome, Olivia",
        youhavenotanykeymetrics:
          "You have not any key metrics about any assessment yet. Please start new assessment by following steps below.",
        selectanassessment: "Select an assessment",
        completeanassessment: "Complete an assessment",
        tractactionablenotes: "Track actionable and notes",
        trackprogress: "Track your progress",
        whetheryouhaveateam:
          "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        startnewassessment: "Start new assessment",
        //dashboard main
        tvm: "Threat, Vulnerable Management (TVM)",
        showingkeymetrics: "Showing key metrics from 13/01/2022 to 13/01/2023",
        assessmentprogress: "Assessment progress",
        complianceprogress: "Compliance progress",
        totalactions: "Total actions",
        totalquestions: "Total questions",
        completedactions: "Completed actions",
        overallassessment: "Overall assessment score",
        initialscore: "Initial score",
        currentscore: "Current score",
        targetscore: "Target score",
        maturityovertime: "Maturity over time",
        riskscore: "Risk score",
        almostreaching: "You’ve almost reaching your risk limit",
        usedspots:
          "You have used 80% of your available spots. Upgrade plan to monitor more vendors.",
        comparisonscore: "Comparison score",
        compliance: "Compliance",
        assessments: "Assessments",
        targets: "Targets",
        actionitems: "Action items",
        highestpriority: "Highest priority",
        highpriority: "High priority",
        lowpriority: "Low priority",
        lowestpriority: "Lowest priority",
        goalaudition:
          "Goal oriented audition preparing for the job seeker. Is a community driven blind audition platform a place",
        viewall: "View all",
        //assignments main page
        assessments: "Assessments",
        questions: "Questions",
        educationalassessment:
          "Educational assessment or educational evaluation is the systematic process of documenting and using empirical data on the knowledge, skill, attitudes, aptitude and beliefs to refine programs and improve student learning",
        startassessment: "Start assessment",
        newassessments: "New Assessments",
        ongoingassessments: "Ongoing Assessments",
        completedassessments: "Completed Assessments",
        //ongoing assessments page
        model: "Model",
        starteddate: "Started date",
        lastactivity: "Last activity",
        requestsinreview: "Requests in review",
        assignees: "Assignees",
        comments: "Comments",
        supportticket: "Support ticket",
        actionsassigned: "Actions assigned",
        totalactions: "Total actions",
        viewdashboard: "View dashboard",
        roadmaps: "Roadmaps",
        continueassessment: "Continue assessment",
        //ongoing example page
        manageitot: "Manage IT and OT",
        informationasset: "Information Asset",
        manageconfiguration: "Manage configuration",
        manageactivities: "Manage activities",
        itotassets:
          "The IT and OT assets inventory attributes cybersecurity activities for example location assets parity system and formwork.",
        notimplemented: "Not implemented",
        partiallyimplemented: "Partially implemented",
        largelyimplemented: "Largely implemented",
        fullyimplemented: "Fully implemented",
        viewcomments: "View comments",
        viewsupport: "View support",
        //assessments completed page
        newmodel: "New Model has been released",
        educationalassessment:
          "Educational assessment or educational evaluation is the systematic process of documenting and using empirical data on the knowledge, skill, attitudes, aptitude",
        upgradeassessment: "Upgrade assessment",
        //ASSESSMENTS COMPLETED PAGE HERO
        upgradetoassessment: "Upgrade to new assessment",
        educationalassessment:
          "Educational assessment or educational evaluation is the systematic process of documenting and using empirical data on the knowledge, skill, attitudes, aptitude",
        whatsnew: "What's new",
        upgradequery: "Do you want to upgrade MODAL ARE-23w to DOW - 909?",
        upgradeexisting: "Upgrade on existing",
        duplicatenupgrade: "Duplicate the current and upgrade to new modal",
        cancel: "Cancel",
        upgradenow: "Upgrade now",
        //ROADMAPS HIGH PRORITY BASE
        all: "All",
        assigned: "Assigned",
        unassigned: "Unassigned",
        allroadmaps: "All roadmaps",
        highpriority: "High priority",
        mediumpriority: "Medium priority",
        lowpriority: "Low priority",
        highpriorityroadmaps: "High priority roadmaps",
        sortby: "Sort by",
        inprogress: "In progress",
        inrevision: "In revision",
        inreview: "In review",
        completed: "Completed",
        actionitem: "Action item",
        description: "Description",
        assignee: "Assignee",
        duedate: "Due date",
        actions: "Actions",
        cybersecurity:
          "Cybersecurity decisions are aligned with the governance model and OT.",
        myself: "Myself",
        //roadmaps med
        mediumpriorityroadmaps: "Medium priority roadmaps",
        lowpriorityroadmaps: "Low priority roadmaps",
        roadmapsgenericdescription:
          "Educational assessment or educational evaluation is the systematic process of documenting and using empirical data on the knowledge, skill, attitudes, aptitude",
        assignedto: "Assigned to",
        edit: "Edit",
        assigntoother: "Assign to other",
        assigneename: "Assignee name",
        reporter: "Reporter",
        status: "Status",
        priority: "Priority",
        //comments drawer
        comments: "Comments",
        newupdates: "New Updates",
        allcomments: "All comments",
        question1: "Question 1",
        newcomments: "New Comments",
        fiveminutesago: "5 minutes ago",
        dismiss: "Dismiss",
        viewcomments: "View Comments",
        send: "Send",
        entercomment: "Enter your comment here",
        enteryouremail: "Enter your email",

        finishednotes:
          "I’ve finished adding my notes. Happy for us to review whenever you’re ready!",
        dismiss: "Dismiss",
        reply: "Reply",
        enterreply: "Enter your reply here",
        updateversion: "Update on new version",
        systemreply: "System reply on question",
        finishednotes:
          "I’ve finished adding my notes. Happy for us to review whenever you’re ready!",
        loadmore: "Load More.",
        resetpassword: "Reset Password",
        oldpassword: "Old Password",
        newpassword: "New Password",
      },
    },
    fr: {
      translation: {
        welcome: "Chào mừng đến với bình nguyên vô tận",
        login: "Connexion",
        signup: "S'inscrire",
        // signin page translations
        enteremail: "Entrez votre email",
        enterpassword: "Entrez votre mot de passe",
        password: "Mot de passe",
        remember: "Se souvenir pendant 30 jours",
        forgot: "Mot de passe oublié",
        signin: "S'identifier",
        donthaveanaccount: "Vous n'avez pas de compte? ",
        // signup page translations
        fullname: "Nom et prénom*",
        enteryourname: "Entrez votre nom",
        email: "E-mail*",
        enteryouremail: "Entrer votre Email",
        createpassword: "Créer un mot de passe",
        atleast8characters: "Doit être au moins 8 caractères.",
        confirmpassword: "Confirmez le mot de passe*",
        confirmpasswordinput: "Confirmez le mot de passe*",
        getstarted: "Commencer",
        alreadyhaveaccount: "Vous avez déjà un compte? ",
        startcompliance: "Nous simplifions la gestion des cyber-risques",
        createfreeaccount:
          "Créez un compte gratuit et commencer votre evalutation. Aucune carte de crédit nécessaire. Commencez dans 2 minutes.",
        companieswhotrust:
          "1000+ entreprises qui font confiance à ILIR Cyberdefence",
        //add company details page translation
        addcompanydetails: "Ajouter les détails de l'entreprise",
        companyname: "Nom de l'entreprise*",
        enteryourcompanyname: "Entrez le nom de votre entreprise",
        country: "Pays*",
        enteryourcountry: "Entrez votre pays",
        state: "État*",
        enteryourstate: "Entrez votre état",
        city: "Ville*",
        enteryourcity: "Entrez votre ville",
        zipcode: "Code postal*",
        enteryourzipcode: "Entrez votre code postal",
        address: "Adresse*",
        enteryouraddress: "Entrez votre adresse",
        continue: "Continuer",
        //nav bar translations
        settings: "Paramètres",
        support: "Soutien",
        notifications: "Notifications",
        usermanuals: "Manuels d'utilisation",
        comments: "Commentaires",
        roadmaps: "Feuilles de route",
        assessments: "Évaluations",
        dashboard: "Tableau de bord",
        search: "Recherche",
        //dashboard home page translations
        welcomeolivia: "Bienvenue, Olivia",
        youhavenotanykeymetrics:
          "Vous n'avez pas encore de mesures clés sur une évaluation. Veuillez commencer une nouvelle évaluation en suivant les étapes ci-dessous.",
        selectanassessment: "Sélectionnez une évaluation",
        completeanassessment: "Complétez une évaluation",
        tractactionablenotes: "Suivez les actions et les notes",
        trackprogress: "Suivez votre progression",
        whetheryouhaveateam:
          "Que vous ayez une équipe de 2 ou 200, nos boîtes de réception d'équipe partagées permettent à tout le monde de rester sur la même page et dans la boucle.",
        startnewassessment: "Commencer une nouvelle évaluation",
        //dashboard main
        tvm: "Protection des renseignements personnels (LOI 25)",
        showingkeymetrics:
          "Affichage des résultats clés du 13/01/2022 au 13/01/2023",
        assessmentprogress: "Avancement de l'évaluation",
        complianceprogress: "Avancement de la conformité",
        totalquestions: "Nouvelles Taches",

        totalactions: "Taches terminées",
        completedactions: "Taches terminées",
        overallassessment: "Score d'évaluation globale",
        initialscore: "Score initial",
        currentscore: "Score actuel",
        targetscore: "Score cible",
        maturityovertime: "Maturité au fil du temps",
        riskscore: "Score global de risque",
        almostreaching:
          "Vous avez presque atteint le niveau risque maximal acceptable",
        usedspots:
          "Vous devez commencer à exécuter les tâches prioritaires de la feuille de route afin de diminuer",
        comparisonscore: "Score de comparaison",
        compliance: "Conformité",
        assessments: "Évaluations",
        targets: "Cibles",
        actionitems: "Taches",
        highestpriority: "Tres Urgent",
        highpriority: "Semi-urgent",
        lowpriority: "Moin urgent",
        lowestpriority: "Non urgent",
        goalaudition:
          "Audition orientée objectif préparant le chercheur d'emploi. Est une communauté",
        drivenaudition:
          "Inclure le titre et les coordonnées du responsable de la PRP sur lesite Internet de l’organisation.",
        viewall: "Tout voir",
        //assignments main page
        assessments: "Évaluations",
        questions: "Questions",
        educationalassessment:
          "La Loi modernisant des dispositions législatives en matière de protection des renseignements personnels, aussi appelée loi 25, vise à protéger la population québécoise en responsabilisant les entreprises quant aux informations personnelles qu’elles détiennent.",
        startassessment: "Commencer l'évaluation",
        newassessments: "Nouvelles évaluations",
        ongoingassessments: "Évaluations en cours",
        completedassessments: "Évaluations terminées",
        //ongoing assessments page
        model: "Modèle",
        starteddate: "Date de début",
        lastactivity: "Dernière Activité",
        requestsinreview: "Demandes de révision",
        assignees: "Responsables",
        comments: "Commentaires",
        supportticket: "Billet de support",
        actionsassigned: "Taches attribuées",
        totalactions: "Taches totales",
        viewdashboard: "Affichage du tableau de bord",
        roadmaps: "Feuilles de route",
        continueassessment: "Continuer l'évaluation",
        //ongoing example page
        manageitot: "Traitement loyal",
        informationasset: "Droits des personnes",
        manageconfiguration: "Droit d'être informé",
        manageactivities: "Violation de données",
        itotassets:
          "Votre organisation documente les raison de cueillette des renseignement personnels ?",
        notimplemented: "Pas implémenté",
        partiallyimplemented: "Partiellement implémenté",
        largelyimplemented: "Largement implémenté",
        fullyimplemented: "Entièrement implémenté",
        viewcomments: "Voir les commentaires",
        viewsupport: "Afficher le support",
        //assessments completed page
        newmodel: "Un nouveau modèle a été publié",
        educationalassessment:
          "La Loi modernisant des dispositions législatives en matière de protection des renseignements personnels, aussi appelée loi 25, vise à protéger la population québécoise en responsabilisant les entreprises quant aux informations personnelles qu’elles détiennent.",
        upgradeassessment: "mise à niveau de l'évaluation",
        //ASSESSMENTS COMPLETED PAGE
        upgradetoassessment: "Passer à une nouvelle évaluation",
        educationalassessment:
          "La Loi modernisant des dispositions législatives en matière de protection des renseignements personnels, aussi appelée loi 25, vise à protéger la population québécoise en responsabilisant les entreprises quant aux informations personnelles qu’elles détiennent.",
        whatsnew: "Quoi de neuf",
        upgradequery: "Voulez-vous mettre à niveau Modal Are-23W à Dow - 909?",
        upgradeexisting: "Mise à niveau sur existant",
        duplicatenupgrade:
          "Dupliquez le courant et la mise à niveau vers un nouveau moddele",
        cancel: "Annuler",
        upgradenow: "Mettre à jour maintenant",
        //ROADMAPS HIGH PRORITY BASE
        all: "Tous",
        assigned: "Attribué",
        unassigned: "Non attribué",
        allroadmaps: "Toutes les feuilles de route",
        highpriority: "Tres urgent",
        mediumpriority: "Semi urgent",
        lowpriority: "Moin urgent",
        highpriorityroadmaps: "Feuilles de route Tres Urgent",
        sortby: "Trier par",
        inprogress: "En cours",
        inrevision: "En révision",
        inreview: "En revue",
        completed: "Complété",
        actionitem: "Id de tache",
        description: "Description",
        assignee: "Résponsable",
        duedate: "Date d'échéance",
        actions: "Tache",
        cybersecurity:
          "Inclure le titre et les coordonnées du responsable de la PRP sur le",
        myself: "Moi-même",
        //roadmaps med
        mediumpriorityroadmaps: "Feuilles de route semi-urgent",
        lowpriorityroadmaps: "Feuilles de route moin urgent",
        roadmapsgenericdescription:
          "Le responsable principal ou son délégué s’assure de la conformité de la mise en place des exigences de PRP. Il montre l’exemple et encourage une culture proactive et positive de respect de la vie privée et de la PRP.",
        assignedto: "Assigné à",
        edit: "Modifier",
        assigntoother: "Attribuer à d'autres",
        assigneename: "Nom du Résponsable",
        reporter: "Journaliste",
        status: "Statut",
        priority: "Priorité",
        //comments drawer
        comments: "Commentaires",
        newupdates: "Nouvelles mises à jour",
        allcomments: "Tous les commentaires",
        question1: "Question 1",
        newcomments: "Nouveaux commentaires",
        fiveminutesago: "il y a 5 minutes",
        dismiss: "Rejeter",
        viewcomments: "Voir les commentaires",
        send: "Envoyer",
        entercomment: "Entrez votre commentaire ici",
        finishednotes:
          "J'ai terminé d'ajouter mes notes. Heureux de nous revoir quand vous êtes prêt!",
        dismiss: "Rejeter",
        reply: "Répondre",
        enterreply: "Entrez votre réponse ici",
        updateversion: "Mise à jour sur la nouvelle version",
        systemreply: "Réponse du système à la question",
        finishednotes:
          "J'ai terminé d'ajouter mes notes. Heureux de nous revoir quand vous êtes prêt!",
        loadmore: "Charger plus.",
        resetpassword: "Réinitialiser le mot de passe",
        oldpassword: "Ancien mot de passe",
        newpassword: "Nouveau mot de passe",
      },
    },
  },
});

export default i18n;
