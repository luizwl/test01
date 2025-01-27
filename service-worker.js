self.addEventListener('push', function(event) {
    let titulo = 'Nova Notificação';
    let corpo = 'Você tem uma nova notificação!';

    if (event.data) {
        const data = event.data.json();
        titulo = data.titulo;
        corpo = data.corpo;
    }

    const options = {
        body: corpo,
        icon: '/icon.png'
    };

    event.waitUntil(
        self.registration.showNotification(titulo, options)
    );
});
