import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    header: {
        position: 'relative',
    },

    headerImage: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: 'rgbs(0, 0, 0, 0.3)',
    },

    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
    
    shareButton: {
        position: 'absolute',
        top: 40,
        right: 60,
        zIndex: 10,
    },

    bookmarkButton: {
        position: 'absolute',
        top:40,
        right: 30,
        zIndex: 10,
    },

    previewButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    },

    previewText: {
        color: '#FFFFFF',
        marginLeft: 8,
        fontWeight: '600',
    },

    content: {
        padding: 20,
    },

    badge: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },

    badgeText: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '1A1A1A',
        marginBottom: 8,
    },

    courseInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },

    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },

    infoText: {
        marginLeft: 4,
        color: '#666666',
    },

    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        marginBottom: 20,
        justifyContent: 'center',
    },

    tab: {
        paddingVertical: 12,
        marginRight: 24,
    },

    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#0056FF',
    },

    tabText: {
        color: '#666666',
        fontWeight: '600',
        fontSize: 18,
    },

    activeTabText: {
        color: '#0056FF',
    },

    aboutText: {
        fontSize: 14,
        color: '1A1A1A',
        lineHeight: 20,
        marginBottom: 20,
    },

    tutorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    tutorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
      },
      tutorInfo: {
        flex: 1,
      },
      tutorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1A1A',
      },
      tutorTitle: {
        fontSize: 14,
        color: '#666666',
      },
      tutorActions: {
        flexDirection: 'row',
      },
      tutorAction: {
        marginLeft: 16,
        flexDirection: 'row',
      },
      infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      infoGridItem: {
        width: '50%',
        marginBottom: 16,
      },
      infoLabel: {
        fontSize: 12,
        color: '#666666',
        marginBottom: 4,
      },
      infoValue: {
        fontSize: 14,
        color: '#1A1A1A',
        fontWeight: '600',
      },
      lessonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      lessonNumber: {
        width: 24,
        height: 24,
        borderRadius: 25,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
      },
      lessonNumberText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A1A1A',
      },
      lessonInfo: {
        flex: 1,
      },
      lessonTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
      },
      lessonDuration: {
        fontSize: 12,
        color: '#666666',
      },
      reviewItem: {
        marginBottom: 20,
      },
      reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      reviewerImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
      },
      reviewerInfo: {
        flex: 1,
      },
      reviewerName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
      },
      reviewDate: {
        fontSize: 12,
        color: '#666666',
      },
      reviewText: {
        fontSize: 14,
        color: '#1A1A1A',
        lineHeight: 20,
      },

      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      totalprice: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      enrollButton: {
        backgroundColor: '#0056FF',
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
      },
      enrollButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
});

export default styles;