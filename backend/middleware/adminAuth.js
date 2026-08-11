import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token || req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded?.id) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const adminUser = await userModel.findById(decoded.id).select('email')

        if (!adminUser || adminUser.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth;