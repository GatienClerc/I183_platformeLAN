"use strict";
App.component('join-form', {
    template: `
    <div class="lan-info-card" style="
        padding: 20px;
        border-radius: 12px;
        background: #1e1e1e;
        color: white;
        width: 100%;
        max-width: 450px;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);
        margin: 20px auto;
    ">
        <h2 style="margin: 0 0 10px 0; font-size: 1.6rem; font-weight: bold;">
            {{ name }}
        </h2>

        <p style="margin: 5px 0; font-size: 1.1rem;">
            📅 Date : <strong>{{ lan.date }}</strong>
        </p>

        <p v-if="spotsRemaining > 0" style="margin: 5px 0; color: #4caf50;">
            🎟️ Places restantes : <strong>{{ spotsRemaining }}</strong>
        </p>
        <p v-else style="margin: 5px 0; color: #f44336;">
            ❌ Plus de places disponibles
        </p>

        <p style="margin: 10px 0 20px 0; opacity: 0.8;">
            📌 Prochaine LAN : <strong>{{ lan.nextLanDate }}</strong>
        </p>

        <button 
            @click="goToPayment"
            :disabled="spotsRemaining <= 0"
            style="
                width: 100%;
                padding: 12px;
                margin-top: 10px;
                background: #2979ff;
                border: none;
                border-radius: 8px;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                transition: 0.3s;
            "
        >
            💳 Payer mon inscription
        </button>
    </div>
    `,

    data() {
        return {
            currentLAN: {
                id: 12,
                name: "LAN Party #12",
                date: "2026-04-15",
                spots: 100,
                spotsTaken: 72,
                nextLanDate: "2026-07-20",
                paymentUrl: "/payment/lan/12"
            }
        };
    },

    methods: {
        goToPayment() {
            window.location.href = this.lan.paymentUrl;
        }
    },
});