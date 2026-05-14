<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AME Pay - Site Under Construction</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
            min-height: 100vh;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        /* Style for disabled buttons to look unclickable */
        .btn-disabled {
            cursor: not-allowed;
            opacity: 0.6;
            pointer-events: none;
        }
    </style>
</head>
<body class="flex flex-col text-slate-800">

    <!-- Header / Navigation -->
    <header class="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <!-- Logo positioned in the upper left - Switched to WebP format -->
        <div class="flex items-center">
            <img src="https://res.cloudinary.com/duj1j8ljv/image/upload/q_auto/f_auto/v1778727129/AME_Pay_Logo_kidbn9.png" alt="AME Pay Logo" class="h-16 w-auto object-contain">
        </div>
        
        <!-- Interactive elements disabled as per previous instructions -->
        <div class="flex items-center gap-4">
            <span class="text-sm font-semibold text-slate-400 cursor-not-allowed">Sign In</span>
            <button disabled class="btn-disabled bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md">
                Get Started Free
            </button>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            Australian Payment Infrastructure
        </div>

        <!-- Construction Icon -->
        <div class="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center mb-10 border border-slate-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="4" rx="1" fill="#2563eb" />
                <path d="M7 10V18" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                <path d="M17 10V18" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 14H20" stroke="#2563eb" stroke-width="2" stroke-dasharray="2 2"/>
            </svg>
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Site is Under <span class="text-blue-600">Construction</span>
        </h1>

        <!-- Subtext -->
        <p class="max-w-2xl text-slate-500 text-lg leading-relaxed mb-10">
            We're putting the finishing touches on AME Pay. Our next-generation virtual payment platform will be back online shortly — stronger, faster, and ready to power your business.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button disabled class="btn-disabled w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                Notify Me
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
            <a href="mailto:info@ame-pay.com.au" class="w-full sm:w-auto bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all text-center">
                Contact Support
            </a>
        </div>

        <!-- Patience Message -->
        <p class="text-slate-400 text-sm font-medium">Thank you for your patience.</p>
    </main>

    <!-- Footer -->
    <footer class="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        <div class="mb-4 md:mb-0">
            © 2026 AME PAY. ALL RIGHTS RESERVED.
        </div>
        <div class="flex items-center gap-1 text-right">
            Australian Payments Network Member
        </div>
    </footer>

</body>
</html>
