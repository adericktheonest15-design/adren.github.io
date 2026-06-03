<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adren Football Academy</title>
    <style>

        :root {
            --primary: #00ff66; 
            --secondary: #ffcc00; 
            --dark-bg: #0b0f19; 
            --card-bg: #161f30; 
            --text-light: #ffffff;
            --text-gray: #a0aec0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--dark-bg);
            color: var(--text-light);
            overflow-x: hidden;
        }


        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
            0% { box-shadow: 0 0 5px var(--primary); }
            50% { box-shadow: 0 0 20px var(--primary); }
            100% { box-shadow: 0 0 5px var(--primary); }
        }

        
        .student-badge {
            background: linear-gradient(90deg, #ff0055, var(--secondary));
            color: #000;
            text-align: center;
            padding: 10px;
            font-weight: bold;
            font-size: 0.95rem;
            letter-spacing: 1px;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

    
        header {
            background-color: rgba(11, 15, 25, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .logo span { color: var(--primary); }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li { margin-left: 30px; }

        nav ul li a {
            color: var(--text-gray);
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
            text-transform: uppercase;
            font-size: 0.9rem;
        }

        nav ul li a:hover {
            color: var(--primary);
        }

    
        .hero {
            position: relative;
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(rgba(11, 15, 25, 0.7), rgba(11, 15, 25, 0.9)), 
                        url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920') no-repeat center center/cover;
            padding: 0 20px;
        }

        .hero-content {
            animation: fadeInUp 1.2s ease-out;
            max-width: 800px;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 1.2;
        }

        .hero h1 span {
            color: transparent;
            -webkit-text-stroke: 1px var(--primary);
        }

        .hero p {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 30px;
        }

        .cta-btn {
            display: inline-block;
            padding: 15px 35px;
            background-color: var(--primary);
            color: #000;
            font-weight: bold;
            text-decoration: none;
            border-radius: 50px;
            text-transform: uppercase;
            transition: 0.4s;
            animation: pulseGlow 2s infinite;
        }

        .cta-btn:hover {
            transform: scale(1.05);
            background-color: var(--secondary);
        }

    
        .media-container {
            padding: 60px 8%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 40px;
            background-color: var(--card-bg);
        }

        .media-card {
            background: var(--dark-bg);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.05);
        }

        .media-card h3 {
            padding: 20px;
            font-size: 1.3rem;
            color: var(--secondary);
        }

        .media-card video, .media-card img {
            width: 100%;
            height: 250px;
            object-cover: cover;
            display: block;
        }

    
        .features {
            padding: 80px 8%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        .features-text { flex: 1; min-width: 300px; margin-right: 40px; }
        .features-text h2 { font-size: 2.5rem; margin-bottom: 20px; color: var(--primary); }
        
        .features-list {
            list-style: none;
            margin-top: 20px;
        }

        .features-list li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            font-size: 1.1rem;
        }

        .features-list li::before {
            content: "⚡";
            margin-right: 15px;
            color: var(--secondary);
        }

    
        .schedule-section {
            padding: 80px 8%;
            background-color: var(--card-bg);
            text-align: center;
        }

        .schedule-section h2 { font-size: 2.5rem; margin-bottom: 40px; }

        .table-wrapper { overflow-x: auto; }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: var(--dark-bg);
            border-radius: 10px;
            overflow: hidden;
        }

        th, td {
            padding: 18px;
            text-align: left;
        }

        th {
            background-color: var(--primary);
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
        }

        tr { border-bottom: 1px solid rgba(255,255,255,0.05); }
        tr:hover { background-color: rgba(255,255,255,0.02); }

        
        .register-section {
            padding: 80px 8%;
            max-width: 600px;
            margin: 0 auto;
        }

        .register-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: var(--primary);
        }

        .register-section p {
            text-align: center;
            color: var(--text-gray);
            margin-bottom: 40px;
        }

        form {
            background-color: var(--card-bg);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-light);
            font-weight: 600;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 14px;
            background-color: var(--dark-bg);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            color: #fff;
            font-size: 1rem;
            transition: 0.3s;
        }

        .form-group input:focus, .form-group select:focus {
            border-color: var(--primary);
            outline: none;
        }

        form button {
            width: 100%;
            padding: 16px;
            background-color: var(--primary);
            color: #000;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            text-transform: uppercase;
        }

        form button:hover {
            background-color: var(--secondary);
        }

        /* --- FOOTER --- */
        footer {
            background-color: #05070b;
            text-align: center;
            padding: 40px 20px;
            font-size: 0.9rem;
            color: var(--text-gray);
            border-top: 1px solid rgba(255,255,255,0.05);
        }
    </style>
</head>
<body>

    <div class="student-badge">
    ADREN jr
    </div>

    <header>
        <div class="logo">Adren<span>Football</span></div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#training">Media</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#register">Join Academy</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Develop Your Skills At <span>Adren Academy</span></h1>
            <p>Train with professional coaches, access state-of-the-art infrastructure, and fast-track your elite football career pipeline.</p>
            <a href="#register" class="cta-btn">Register Instantly</a>
        </div>
    </section>

    <section class="media-container" id="training">
        <div class="media-card">
           
            </video>
        </div>
        <div class="media-card">
            <h3>Matchday Action Image</h3>
           
        </div>
    </section>

    <section class="features">
        <div class="features-text">
            <h2>Why Choose Adren Academy?</h2>
            <p>We supply an elite-level environment designed to scale talent efficiently.</p>
            <ul class="features-list">
                <li>Professional tactical and positional analysis modules</li>
                <li>High-performance physical conditioning systems</li>
                <li>Direct exposure pathways to local and international leagues</li>
            </ul>
        </div>
    </section>

    <section class="schedule-section" id="schedule">
        <h2>Weekly Training Cohorts</h2>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Cohort Age Group</th>
                        <th>Training Days</th>
                        <th>Session Windows</th>
                        <th>Field Assignment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Under-15 Selection</td>
                        <td>Monday & Wednesday</td>
                        <td>16:00 - 18:00 EAT</td>
                        <td>Pitch A (Main Arena)</td>
                    </tr>
                    <tr>
                        <td>Under-17 Elite</td>
                        <td>Tuesday & Thursday</td>
                        <td>16:30 - 18:30 EAT</td>
                        <td>Pitch B (Tactical Hub)</td>
                    </tr>
                    <tr>
                        <td>Under-20 Prospects</td>
                        <td>Friday & Saturday</td>
                        <td>08:00 - 10:30 EAT</td>
                        <td>Pitch A (Main Arena)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="register-section" id="register">
        <h2>Academy Admissions</h2>
        <p>Complete the formal registration portal layout below to secure your tryout booking slot.</p>
        
        <form id="academyForm">
            <div class="form-group">
                <label for="playerName">Player Full Name</label>
                <input type="text" id="playerName" required placeholder="Enter full name">
            </div>
            <div class="form-group">
                <label for="playerEmail">Email Address</label>
                <input type="email" id="playerEmail" required placeholder="Enter active email address">
            </div>
            <div class="form-group">
                <label for="ageGroup">Target Age Cohort</label>
                <select id="ageGroup" required>
                    <option value="">-- Choose Cohort Bracket --</option>
                    <option value="u15">Under-15 Selection</option>
                    <option value="u17">Under-17 Elite</option>
                    <option value="u20">Under-20 Prospects</option>
                </select>
            </div>
            <button type="submit">Submit Application</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2026 Adren Football Academy. Crafted by ADERICK (Reg No: 02.6931.01.03.2025). All Rights Reserved.</p>
    </footer>

    <script>
        document.getElementById('academyForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            
            const name = document.getElementById('playerName').value.trim();
            const email = document.getElementById('playerEmail').value.trim();
            const cohort = document.getElementById('ageGroup').value;

            
            if(name === "" || email === "" || cohort === "") {
                alert("Error: All application form registration fields must be properly completed.");
            } else {
                alert(`Success! Registration logged for: ${name}. Welcome to Adren Football Academy.`);
                this.reset(); 
            }
        });
    </script>
</body>
</html>
