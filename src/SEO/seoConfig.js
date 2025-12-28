/**
 * SEO configuration and metadata for different pages
 */

const siteUrl = 'https://www.jhncbd.com';

export const seoConfig = {
    defaultTitle: 'ডা: মো. জহুরুল হক নার্সing কলেজ (JHNC) - Best Nursing Institute in Bangladesh',
    titleTemplate: '%s | জেএইচএনসি',
    description: 'জেএইচএনসি - Dr. Md. Jahurul Haque Nursing College. Offering 3-year Diploma in Nursing Science and Midwifery. BNMC approved nursing education with experienced faculty and modern facilities.',
    siteUrl,
    siteName: 'জেএইচএনসি',
    twitterHandle: '@jhncbd',
    facebookAppId: '',
};

export const pageSEO = {
    home: {
        title: 'জেএইচএনসি',
        description: 'ডা: মো. জহুরুল হক নার্সিং কলেজ (জেএইচএনসি) - Top nursing college in Bangladesh. 3-year Diploma in Nursing Science and Midwifery approved by BNMC. Experienced faculty, modern facilities, and excellent placement.',
        keywords: 'JHNC, Jahurul Haque Nursing College, Best nursing college, Nursing education Bangladesh, BNMC approved nursing, Diploma in Nursing Bangladesh, ডা: মো. জহুরুল হক নার্সিং কলেজ',
        canonicalUrl: `${siteUrl}/`,
    },
    about: {
        title: 'About JHNC - Dr. Md. Jahurul Haque Nursing College Bangladesh',
        description: 'Learn about JHNC - A premier nursing education institution with excellence. BNMC approved 3-year Diploma in Nursing Science and Midwifery program with modern infrastructure.',
        keywords: 'About JHNC, Jahurul Haque Nursing College, Nursing college history, BNMC approved institute, Nursing education excellence',
        canonicalUrl: `${siteUrl}/about`,
    },
    course: {
        title: 'Diploma in Nursing Science and Midwifery - JHNC Course Details',
        description: 'JHNC offers 3-year Diploma in Nursing Science and Midwifery approved by Bangladesh Nursing and Midwifery Council (BNMC). Modern curriculum, practical training, experienced faculty.',
        keywords: 'Diploma in Nursing Bangladesh, Nursing course details, BNMC approved course, Nursing admission, Nursing syllabus Bangladesh, Midwifery course',
        canonicalUrl: `${siteUrl}/course`,
    },
    gallery: {
        title: 'Photo Gallery - Campus Life at JHNC',
        description: 'Explore JHNC campus facilities, classrooms, laboratories, events, and student activities. View our modern nursing education infrastructure.',
        keywords: 'JHNC gallery, Nursing college campus, Nursing lab facilities, Student life Bangladesh, Nursing college infrastructure',
        canonicalUrl: `${siteUrl}/gallery`,
    },
    notice: {
        title: 'Latest Notices & Announcements - JHNC',
        description: 'Stay updated with the latest notices, announcements, and admission updates from Dr. Md. Jahurul Haque Nursing College (JHNC) Bangladesh.',
        keywords: 'JHNC notices, Nursing admission notice, College announcements, Nursing exam schedule, JHNC updates Bangladesh',
        canonicalUrl: `${siteUrl}/notice`,
    },
    teacher: {
        title: 'Expert Faculty - Experienced Nursing Teachers at JHNC',
        description: 'Meet our highly qualified and experienced nursing faculty at JHNC. Our teachers bring years of clinical and academic expertise to provide quality nursing education.',
        keywords: 'JHNC faculty, Nursing teachers Bangladesh, Experienced nursing educators, Qualified nursing instructors, Medical faculty',
        canonicalUrl: `${siteUrl}/teacher`,
    },
    director: {
        title: 'Board of Directors - Leadership at JHNC',
        description: 'Meet the governing body and board of directors at Dr. Md. Jahurul Haque Nursing College (JHNC). Experienced leadership committed to excellence in nursing education.',
        keywords: 'JHNC directors, Governing body, College management, Leadership team, JHNC administration',
        canonicalUrl: `${siteUrl}/director`,
    },
    staff: {
        title: 'Administrative Staff - Support Team at JHNC',
        description: 'Our dedicated administrative and support staff ensure smooth operations at JHNC. Committed to providing excellent service to students and faculty.',
        keywords: 'JHNC staff, Administrative team, Support staff, College administration, JHNC employees',
        canonicalUrl: `${siteUrl}/staff`,
    },
    contact: {
        title: 'Contact JHNC - Admission Enquiry & Campus Location',
        description: 'Contact Dr. Md. Jahurul Haque Nursing College (JHNC) for admission enquiries, course information, and campus visits. Get in touch with our admission office today.',
        keywords: 'Contact JHNC, Nursing admission enquiry, JHNC location, Nursing college contact, Admission helpline Bangladesh',
        canonicalUrl: `${siteUrl}/contact`,
    },
};

// Keyword variations for content optimization
export const targetKeywords = {
    primary: [
        'জেএইচএনসি',
        'JHNC',
        'Jahurul Haque Nursing College',
        'Nursing colleges in Bangladesh',
        'Best nursing institutes in BD',
        'ডা: মো. জহুরুল হক নার্সিং কলেজ',
    ],
    secondary: [
        'Nursing education Bangladesh',
        'Diploma in Nursing Bangladesh',
        'BNMC approved nursing college',
        'Nursing course Bangladesh',
        'Best nursing college Bangladesh',
    ],
    local: [
        'Nursing institute',
        'Medical education Bangladesh',
        'Healthcare education Bangladesh',
    ],
    longTail: [
        'How to become a nurse in Bangladesh',
        'Nursing admission requirements Bangladesh',
        'BNMC approved nursing colleges list',
        'Nursing career opportunities Bangladesh',
        'Best nursing colleges in Bangladesh',
    ],
};
