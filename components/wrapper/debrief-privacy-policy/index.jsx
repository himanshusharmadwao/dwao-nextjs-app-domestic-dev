import React from 'react';
import styles from "@/styles/markdown.module.css";
import Image from 'next/image';
import bannerDesktop from '@/public/privacy-policy-desktop.webp';
import bannerMobile from '@/public/privacy-policy-mobile.webp';
import Link from 'next/link';

const DebriefPrivacyPolicyWrapper = async () => {

    return (
        <>
            {/* Banner */}
            <div className="mb-14">
                <div className="mb-14">
                    <div className="relative w-full overflow-hidden">
                        <div className="relative w-full h-[410px]">
                            <div className="aspect-[7/10] hidden lg:block">
                                <Image
                                    src={bannerDesktop}
                                    alt="Desktop Banner"
                                    fill
                                    priority
                                    objectFit="cover"
                                />
                            </div>
                            <div className="aspect-[15/7] lg:hidden">
                                <Image
                                    src={bannerMobile}
                                    alt="Mobile Banner"
                                    fill
                                    priority
                                    objectFit="cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 flex items-center">
                                <div className="container">
                                    <div className="text-left py-5 ">
                                        <h1 className="lg:text-[3.5vw] text-[28px] leading-[1.2] text-white">Privacy Policy</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container">
                <h2 className="text-4xl mb-12 text-gray-800">Privacy Policy</h2>
                <div className={`${styles.markdownStyle} mb-20`}>
                    <h3>Privacy Policy</h3>
                    <p><b>Effective Date:</b> February 17, 2026 <b>Last Updated:</b> February 17, 2026</p>
                    <p>DWAO ("we," "us," or "our") operates the Debrief mobile application ("App"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our App.</p>
                    <h3>1. Information We Collect</h3>
                    <h4>Account Information</h4>
                    <ul>
                        <li>Email address</li>
                        <li>Display name</li>
                        <li>Password (stored as a secure hash, never in plain text)</li>
                        <li>Third-party sign-in identifiers (Microsoft or Apple account IDs, if used)</li>
                    </ul>
                    <h4>Meeting Data</h4>
                    <ul>
                        <li>Audio recordings of meetings you choose to record</li>
                        <li>Transcripts generated from your audio recordings</li>
                        <li>AI-generated meeting summaries, action items, topics, and decisions</li>
                        <li>Meeting titles, notes, and metadata (duration, language, timestamps)</li>
                    </ul>
                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information to: - Provide and maintain the App's core functionality - Transcribe your meeting audio using AI speech-to-text services - Generate meeting summaries and action items using AI language models - Authenticate your identity and secure your account - Store and organize your meeting data for your access</p>
                    <h3>3. Third-Party Services</h3>
                    <p>We use the following third-party services to process your data:</p>
                    <ul>
                        <li><b>Groq</b> — Audio transcription and text summarization. Audio and transcript data is sent to Groq's API for processing. Refer to <Link href="https://groq.com/privacy-policy/" target='_blank'>Groq's Privacy Policy </Link> for details on their data handling.</li>
                        <li><b>Microsoft Identity Platform</b> — If you sign in with Microsoft, authentication is handled through Microsoft's OAuth service.</li>
                        <li><b>Apple Sign-In</b> — If you sign in with Apple, authentication is handled through Apple's identity service.</li>
                    </ul>
                    <p>We do <b>not</b> sell your personal data to any third party.</p>
                    <h3>4. Data Storage and Security</h3>
                    <ul>
                        <li>Your data is stored on secure infrastructure.</li>
                        <li>Passwords are securely hashed and never stored in plain text.</li>
                        <li>Authentication tokens are short-lived and encrypted.</li>
                        <li>All communication between the App and our servers is encrypted in transit.</li>
                    </ul>
                    <h3>5. Data Retention</h3>
                    <ul>
                        <li>Your account data and meeting records are retained as long as your account is active.</li>
                    </ul>
                    <h3>6. Your Rights</h3>
                    <p>You have the right to: - Access your personal data stored in the App - Correct inaccurate information via your account settings - Export your meeting data (transcripts, summaries, action items)</p>
                    <h3>7. Changes to This Policy</h3>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy within the App and updating the "Last Updated" date above.</p>
                    <h3>8. Contact Us</h3>
                    <p><b>DWAO</b></p>

                </div>
            </div>
        </>
    );
};

export default DebriefPrivacyPolicyWrapper;