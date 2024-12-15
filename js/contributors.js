// Initialize Map for Contributors
function initializeContributorsMap() {
    const mapElement = document.getElementById('map');

    if (mapElement) {
        console.log('Map element found');
        const map = L.map(mapElement).setView([20, 0], 2);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }).addTo(map);

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="width: 24px; height: 24px; background-color: #f4a261; border-radius: 50%; border: 2px solid white;"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const contributors = [
            { name: "Pablo Sanguinetti", location: [-34.6037, -58.3816], description: "Buenos Aires" },
            { name: "Ana García", location: [40.4168, -3.7038], description: "Madrid" },
            { name: "Callagun Smith", location: [-37.8136, 144.9631], description: "Melbourne" },
            { name: "Kamau Mwangi", location: [-1.2921, 36.8219], description: "Nairobi" },
            { name: "Priya Sharma", location: [28.6139, 77.2090], description: "New Delhi" },
            { name: "Himari Satō", location: [35.0116, 135.7681], description: "Kyoto", image: "img/HimariSato.png" }
        ];

        contributors.forEach(contributor => {
            let popupContent = `<b>${contributor.name}</b><br>${contributor.description}`;

            if (contributor.image) {
                popupContent = `
                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 100px; height: 100px; overflow: hidden; border-radius: 50%; margin-bottom: 10px;">
                            <img src="${contributor.image}" alt="${contributor.name}"
                                style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <b>${contributor.name}</b>
                        <p style="margin: 0; font-size: 0.9rem;">${contributor.description}</p>
                    </div>`;
            }

            L.marker(contributor.location, { icon: customIcon })
                .addTo(map)
                .bindPopup(popupContent);
        });
    } else {
        console.error('Map element not found');
    }
}

// Initialize Map on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    initializeContributorsMap();
});