import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import router from './services/Router.js'

import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp({
    apiKey: "AIzaSyAeyYwnF6JvO7-x51NsKQrTcAgQOQT0ATE",
    authDomain: "sendly-chat.firebaseapp.com",
    projectId: "sendly-chat",
    storageBucket: "sendly-chat.appspot.com",
    messagingSenderId: "334629847290",
    appId: "1:334629847290:web:79fd272cb110f4be2f4943",
    measurementId: "G-EEDG4BE09H"
})

const auth = firebase.auth()

export function useAuth() {
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(() => user.value !== null)

    
    if (computed(isLogin)) {
        router.push("/Chat");
    }

    const signIn = async () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(googleProvider).then(() => {
            router.push({ path: '/Chat' });
        })
    }
    const signInWithGitHub = async () => {
        const githubProvider = new firebase.auth.GithubAuthProvider()
        await auth.signInWithPopup(githubProvider).then(() => {
            router.push({ path: '/Chat' });
        })
    }
    const signOut = async () => {
        await auth.signOut().then(() => {
            router.push({ path: '/' })
        })
    }

    return { user, isLogin, signIn, signOut, signInWithGitHub }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)

export function useChat() {
    const messages = ref([])
    const unsubscribe = messagesQuery.onSnapshot(snapshot => {
        messages.value = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .reverse()
    })
    onUnmounted(unsubscribe)

    const { user, isLogin } = useAuth()

    const sendMessage = text => {
        if (!isLogin.value) return
        const { photoURL, uid, displayName } = user.value
        messagesCollection.add({
            userName: displayName,
            userId: uid,
            photoUrl: photoURL,
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return { messages, sendMessage }
}
