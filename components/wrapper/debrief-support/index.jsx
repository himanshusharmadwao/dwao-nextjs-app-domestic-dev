import React from 'react';
import styles from "@/styles/markdown.module.css";
import Image from 'next/image';
import bannerDesktop from '@/public/privacy-policy-desktop.webp';
import bannerMobile from '@/public/privacy-policy-mobile.webp';
import Link from 'next/link';

const DebriefSupportWrapper = async () => {

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
                                        <h1 className="lg:text-[3.5vw] text-[28px] leading-[1.2] text-white">Debrief Support</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container">
                <h2 className="text-4xl mb-12 text-gray-800">Debrief Support</h2>
                <div className={`${styles.markdownStyle} mb-20`}>
                    <h3>How Can We Help?</h3>
                    <p>If you're experiencing issues with the Debrief app or have questions, we're here to help.</p>
                    <h3>Frequently Asked Questions</h3>
                    <h4>How do I record a meeting?</h4>
                    <p>Tap the record button on the dashboard to start a new meeting recording. Debrief will automatically transcribe your audio in real time.</p>
                    <h4>How does transcription work?</h4>
                    <p>Debrief uses AI-powered speech-to-text to transcribe your meeting audio. Transcripts are generated automatically as you record.</p>
                    <h4>How are meeting summaries generated?</h4>
                    <p>After your meeting ends, Debrief uses AI to generate a summary including key topics, decisions, and action items.</p>
                    <h4>Can I edit my meeting notes?</h4>
                    <p>Yes, you can edit meeting titles and add your own notes to any meeting.</p>
                    <h4>Is my data secure?</h4>
                    <p>Yes. All communication is encrypted in transit, and passwords are securely hashed. See our <Link href="/debrief-privacy-policy">Privacy Policy</Link> for full details.</p>
                    <h4>What sign-in methods are supported?</h4>
                    <p>Debrief supports email and password, Microsoft account, and Apple sign-in.</p>
                    <h3>8. Contact Us</h3>
                    <p><b>DWAO</b></p>

                </div>
            </div>
        </>
    );
};

export default DebriefSupportWrapper;