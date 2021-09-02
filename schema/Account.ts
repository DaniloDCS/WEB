import { Schema, Document, model } from "mongoose"
import bcrypt from "bcryptjs"

interface AccountInterface extends Document {
    name: strig;
    username: string;
    password: string;
    email: string;
    comparePassword(): string;
}

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    networking: {
        instagram: {
            type: String
        },
    },
    userStatus: {
        type: Boolean,
        default: true
    },
    courses: [{
        name: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        institution: {
            type: String,
            required: true
        },
        startsIn: {
            type: Date,
            default: Date.now()
        },
        endsIn: {
            type: Date
        },
        statusCourse: {
            type: String,
            default: "In progress"
        },
        percentProgressCourse: {
            type: String,
            default: "0%"
        },
    }],
    periods: [{
        period: {
            type: String,
            required: true
        },
        startsIn: {
            type: Date,
            default: Date.now()
        },
        endsIn: {
            type: Date
        },
        statusPeriod: {
            type: String,
            default: "In progress"
        },
        percentProgressPeriod: {
            type: String,
            default: "0%"
        },
        courseId: {
            type: Schema.Types.ObjectId
        }
    }],
    disciplines: [{
        disciplineTitle: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            required: true
        },
        startsIn: {
            type: Date,
            default: Date.now()
        },
        endsIn: {
            type: Date
        },
        percentProgressDiscipline: {
            type: String,
            default: "0%"
        },
        reportsDiscipline: {
            av1: { type: Number },
            av2: { type: Number },
            med: { type: Number },
            rec: { type: Number }
        },
        classes: [{
            subject: {
                type: String
            },
            resumeOfClass: {
                type: String
            },
            dateClass: {
                type: Date,
                default: Date.now()
            },
            annotationAboutClass: {
                type: String
            },
        }],
        courseId: {
            type: Schema.Types.ObjectId
        },
        periodId: {
            type: Schema.Types.ObjectId
        },
    }],
    tasks: [{
        titleTask: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        deliveryDate: {
            type: Date
        },
        priority: { type: Number, default: 1 },
        statusTask: { type: Boolean, default: false },
        annotationAboutTask: {
            type: String
        },
        questions: [{
            utterance: {
                type: String
            },
            response: {
                type: String
            },
            statusQuestion: { type: Boolean, default: false },
            caseIncorrect: {
                type: String
            },
        }],
        disciplineId: {
            type: Schema.Types.ObjectId
            //required: true
        },
        courseId: {
            type: Schema.Types.ObjectId
            //required: true
        },
        periodId: {
            type: Schema.Types.ObjectId
            //required: true
        },
    }],
    evaluations: [{
        titleEvaluate: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        note: { type: Number },
        annotationAboutEvaluate: {
            type: String
        },
        questions: [{
            utterance: {
                type: String
            },
            response: {
                type: String
            },
            statusQuestion: { type: Boolean, default: true },
            caseIncorrect: {
                type: String
            },
        }],
        disciplineId: {
            type: Schema.Types.ObjectId
            //required: true
        },
        courseId: {
            type: Schema.Types.ObjectId
            //required: true
        },
        periodId: {
            type: Schema.Types.ObjectId
            //required: true
        },
    }],
    annotationGenerally: [{
        noteTitle: {
            type: String
        },
        note: {
            type: String
        },
        dateNote: {
            type: Date,
            default: Date.now()
        },
        courseId: {
            type: Schema.Types.ObjectId
            //required: true
        },
    }],
    reminders: [{
        reminderTitle: {
            type: String
        },
        reminderDescription: {
            type: String
        },
        priority: { type: Number, default: 1 },
        dateReminder: {
            type: Date,
            default: Date.now()
        },
    }]
}, { timestamps: true })

AccountSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) throw (err)
            this.password = hash
            next(null, this)
        })
    })
})

AccountSchema.methods.comparePassword = function (): string {
    return this.password
}

export default model<AccountInterface>('Account', AccountSchema)